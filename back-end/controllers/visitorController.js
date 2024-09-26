const Visitor = require('../models/Visitor');

// Increment visitor count
const incrementVisitorCount = (req, res) => {
    const currentTime = Date.now();

    // Check for a visitor cookie
    const visitorCookie = req.cookies.visitorId;

    if (!visitorCookie) {
        // Generate a new unique visitor ID
        const newVisitorId = Date.now().toString();
        res.cookie('visitorId', newVisitorId, { maxAge: 24 * 60 * 60 * 1000, httpOnly: true });

        // Increment the visitor count in the database
        Visitor.getVisitorCount((err, result) => {
            if (err) {
                console.error('Error fetching visitor count:', err);
                return res.status(500).json({ error: 'Error fetching visitor count' });
            }

            const currentCount = result.length > 0 ? result[0].count : 0;
            const newCount = currentCount + 1;

            if (result.length === 0) {
                Visitor.insertVisitorCount(newCount, (err) => {
                    if (err) {
                        console.error('Error inserting visitor count:', err);
                        return res.status(500).json({ error: 'Error inserting visitor count' });
                    }
                    return res.json({ count: newCount });
                });
            } else {
                Visitor.updateVisitorCount(newCount, (err) => {
                    if (err) {
                        console.error('Error updating visitor count:', err);
                        return res.status(500).json({ error: 'Error updating visitor count' });
                    }
                    return res.json({ count: newCount });
                });
            }
        });
    } else {
        // If visitor already has a cookie, do nothing and return the current count
        Visitor.getVisitorCount((err, result) => {
            if (err) {
                console.error('Error fetching visitor count:', err);
                return res.status(500).json({ error: 'Error fetching visitor count' });
            }

            const currentCount = result.length > 0 ? result[0].count : 0;
            return res.json({ count: currentCount });
        });
    }
};

// Get the current visitor count without incrementing
const getVisitorCount = (req, res) => {
    Visitor.getVisitorCount((err, result) => {
        if (err) {
            console.error('Error fetching visitor count:', err);
            return res.status(500).json({ error: 'Error fetching visitor count' });
        }

        const currentCount = result.length > 0 ? result[0].count : 0;
        return res.json({ count: currentCount });
    });
};

module.exports = {
    incrementVisitorCount,
    getVisitorCount
};