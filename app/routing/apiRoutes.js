var friends = require('../data/friend.js');

module.exports = function(app) {

    app.get('/api/friends', function(req, res) {
        res.json(friends);
    });

    app.post('/api/friends', function(req, res) {
        var score;
        var selectedFriend;

        for (var x in friends) {
            var diff = 0;
            for (var i = 0; i < req.body.scores.length; i++) {
                diff += Math.abs(req.body.scores[i] - friends[x].scores[i]);
            }

            if (isNaN(score) == false) {
                if (diff < score) {
                    score = diff;
                    selectedFriend = friends[x];
                };
            } else {
                score = diff;
                selectedFriend = friends[x];
            }
        }

        if (selectedFriend) {
            res.json(selectedFriend);
        } else {
            res.json({ name: 'No friend found!', photo: '' });
        }
    });
};