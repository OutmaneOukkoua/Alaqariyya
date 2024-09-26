const Click = require('../models/Click');

// Controller to record a click for a property
const recordClick = (req, res) => {
    const propertyId = req.params.id;

    // Ensure the property ID is valid
    if (!propertyId) {
        return res.status(400).json({ error: 'Invalid property ID' });
    }

    // Record the click in the database
    Click.recordClick(propertyId, (err, result) => {
        if (err) {
            console.error('Error recording click:', err);
            return res.status(500).json({ error: 'Error recording click' });
        }
        res.status(200).json({ message: 'Click recorded successfully' });
    });
};

// Optionally, you can add a function to get the total click count
const getClickCountByProperty = (req, res) => {
    const propertyId = req.params.id;

    Click.getClickCountByPropertyId(propertyId, (err, clickCount) => {
        if (err) {
            console.error('Error fetching click count:', err);
            return res.status(500).json({ error: 'Error fetching click count' });
        }
        res.status(200).json({ propertyId, clickCount });
    });
};

const getTotalClicks = (req, res) => {
    Click.getTotalClicks((err, totalClicks) => {
        if (err) {
            console.error('Error fetching total clicks:', err);
            return res.status(500).json({ error: 'Error fetching total clicks' });
        }
        res.status(200).json({ totalClicks });
    });
};

module.exports = {
    recordClick,
    getClickCountByProperty,
    getTotalClicks, 
};
