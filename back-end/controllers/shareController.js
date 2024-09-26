const Share = require('../models/Share');

const addShare = (req, res) => {
    const { propertyId } = req.body;
    Share.recordShare(propertyId, (err, result) => {
        if (err) {
            res.status(500).json({ message: 'Error recording share', error: err });
        } else {
            res.json({ message: 'Share recorded successfully' });
        }
    });
};

const getShares = (req, res) => {
    Share.getTotalShares((err, totalShares) => {
        if (err) {
            res.status(500).json({ message: 'Error fetching share count', error: err });
        } else {
            res.json({ totalShares });
        }
    });
};

module.exports = {
    addShare,
    getShares
};