module.exports = {
    text: function(string, length, callback) {
		if (string == '' || length == 0) {
			typeof callback === 'function' && callback('ERROR: Missing string or length parameter!\n' + JSON.stringify({"string": string, "length": length}));
		} else if (typeof string != 'string' || isNaN(length)) {
			typeof callback === 'function' && callback('ERROR: Type error in string or length parameter!\n' + JSON.stringify({"string": string, "length": length}));
		} else {
			return string.match(new RegExp('.{1,' + length + '}', 'g'));
		}
    },

    charcode: function(string, length, callback) {
		if (string == '' || length == 0) {
			typeof callback === 'function' && callback('ERROR: Missing string or length parameter!\n' + JSON.stringify({"string": string, "length": length}));
		} else if (typeof string != 'string' || isNaN(length)) {
			typeof callback === 'function' && callback('ERROR: Type error in string or length parameter!\n' + JSON.stringify({"string": string, "length": length}));
		} else {
			var a = [];
            var t = 0;
            var l = 0;
            var s = 0;
            for (var i = 0; i < string.length; i++) {
                t += string.charCodeAt(i).toString(16).length;
                l++;
                if (i == string.length - 1) {
                    a.push(string.substr(s, l));
                    break;
                } else if (t + string.charCodeAt(i + 1).toString(16).length > length) {
                    a.push(string.substr(s, l));
                    t = 0;
                    l = 0;
                    s = i + 1;
                }
            }
            return a;
		}
    }
};