module.exports = {
    text: function(string, length) {
        return string.match(new RegExp('.{1,' + length + '}', 'g'));
    },

    charcode: function(string, length) {
        var a = [];
        var t = 0;
        var l = 0;
		var s = 0;
        for (var i = 0; i < string.length; i++) {
            t += string.charCodeAt(i).toString(16).length;
            l++;
            if (t + string.charCodeAt(i + 1).toString(16).length > length) {
                a.push(string.substr(s, l));
                t = 0;
                l = 0;
				s = i + 1;
            } else if (i == string.length - 1) {
				a.push(string.substr(s, l));
				break;
			}
        }
        return a;
    }
};