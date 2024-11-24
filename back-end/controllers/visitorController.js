const axios = require('axios');
const Visitor = require('../models/Visitor');
require('dotenv').config();

// Increment visitor count and track IP, country, and city
const incrementVisitorCount = async (req, res) => {
    let visitorIP = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

    // If the IP address contains multiple IPs separated by a comma, take the first one
    if (visitorIP.includes(',')) {
        visitorIP = visitorIP.split(',')[0].trim();
    }

    console.log('Processed Visitor IP:', visitorIP);

    try {
        const ipinfoToken = process.env.IPINFO_TOKEN;

        // Fetch geolocation data using ipinfo.io
        const geoResponse = await axios.get(`https://ipinfo.io/${visitorIP}/json?token=${ipinfoToken}`);
        const country = geoResponse.data.country || 'Unknown';
        const city = geoResponse.data.city || 'Unknown';

        // Check if visitor already exists in the database
        Visitor.getVisitorByIP(visitorIP, (err, result) => {
            if (err) {
                console.error('Error fetching visitor by IP:', err);
                return res.status(500).json({ error: 'Error fetching visitor' });
            }

            if (result.length === 0) {
                // New visitor: Insert their IP, city, country, and set visit count to 1
                Visitor.insertVisitorDetails(visitorIP, country, city, (err) => {
                    if (err) {
                        console.error('Error inserting visitor details:', err);
                        return res.status(500).json({ error: 'Error inserting visitor details' });
                    }
                });
            } else {
                // Existing visitor: Increment visit count
                const newVisitCount = result[0].visit_count + 1;
                Visitor.updateVisitCount(visitorIP, newVisitCount, (err) => {
                    if (err) {
                        console.error('Error updating visit count:', err);
                        return res.status(500).json({ error: 'Error updating visit count' });
                    }
                });
            }
        });

        // Increment overall visitor count (if applicable)
        Visitor.getUniqueVisitorCount((err, result) => {
            if (err) {
                console.error('Error fetching unique visitor count:', err);
                return res.status(500).json({ error: 'Error fetching unique visitor count' });
            }
            const uniqueVisitorCount = result.length > 0 ? result[0].unique_visitors : 0;
            return res.json({ count: uniqueVisitorCount });
        });

    } catch (error) {
        console.error('Error fetching geo location:', error);
        return res.status(500).json({ error: 'Error fetching geo location' });
    }
};

// Get unique visitor count (sum of IP addresses)
const getVisitorCount = (req, res) => {
    Visitor.getUniqueVisitorCount((err, result) => {
        if (err) {
            console.error('Error fetching unique visitor count:', err);
            return res.status(500).json({ error: 'Error fetching unique visitor count' });
        }
        const uniqueVisitorCount = result.length > 0 ? result[0].unique_visitors : 0;
        return res.json({ count: uniqueVisitorCount });
    });
};

// Get all visitor details (IP, city, country, visit count)
const getAllVisitorDetails = (req, res) => {
    Visitor.getAllVisitorDetails((err, result) => {
        if (err) {
            console.error('Error fetching all visitor details:', err);
            return res.status(500).json({ error: 'Error fetching visitor details' });
        }
        return res.json(result);
    });
};

module.exports = {
    incrementVisitorCount,
    getVisitorCount,
    getAllVisitorDetails
};
