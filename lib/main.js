module.exports = {
    text: function(string, length, callback) {
		if (typeof string != 'string' || isNaN(length)) {
			typeof callback === 'function' && callback('ERROR: Type error in string or length parameter!\n' + JSON.stringify({"string": string, "length": length}));
		} else if (string == '' || length < 1) {
			typeof callback === 'function' && callback('ERROR: Missing string or length parameter!\n' + JSON.stringify({"string": string, "length": length}));
		} else {
			return string.match(new RegExp('.{1,' + length + '}', 'g'));
		}
    },

    charcode: function(string, length, callback) {
		if (typeof string != 'string' || isNaN(length)) {
			typeof callback === 'function' && callback('ERROR: Type error in string or length parameter!\n' + JSON.stringify({"string": string, "length": length}));
		} else if (string == '' || length < 1) {
			typeof callback === 'function' && callback('ERROR: Missing string or length parameter!\n' + JSON.stringify({"string": string, "length": length}));
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
    },
	
	divide: function(string, options, callback){
		if (typeof string != 'string') {
			typeof callback === 'function' && callback('ERROR: Type error in string parameter!\n' + JSON.stringify({"string": string, "options": options}));
		} else if (string == '') {
			typeof callback === 'function' && callback('ERROR: Missing string parameter!\n' + JSON.stringify({"string": string, "options": options}));
		} else if (!('length' in options)) {
			typeof callback === 'function' && callback('ERROR: Missing length parameter!\n' + JSON.stringify({"string": string, "options": options}));
		} else if (!Array.isArray(options.length)) {
			typeof callback === 'function' && callback('ERROR: Type error! Length parameter must be an array!\n' + JSON.stringify({"string": string, "options": options}));
		} else if ('name' in options && options.length.length != options.name.length) {
			typeof callback === 'function' && callback('ERROR: The numbers of name and length parameter are not equal!\n' + JSON.stringify({"string": string, "options": options}));
		} else {
			try {
				var a = [];
                var s = 0;
                options.length.forEach(function(l) {
                    a.push(string.substr(s, l));
                    s = s + l;
                });
                if (s < string.length && options.returnUnnamed) a.push(string.substring(s));
				if (s > string.length) typeof callback === 'function' && callback('ERROR: The length is less than the divided length parameter!\n' + JSON.stringify({"string": string, "options": options}));
                if ('name' in options) {
                    var o = {};
                    var t = 0;
                    for (var i = 0; i < options.name.length; i++) {
						if (options.name[i] != 'escape') {
							o[options.name[i]] = a[i];
						}
                        t++;
                    }
                    if (t < a.length) o['Unnamed'] = a[t];
                    return o;
                } else {
                    return a;
                }
            } catch (err) {
                typeof callback === 'function' && callback(err + '\n' + JSON.stringify({"string": string, "options": options}));
            }
		}
	}
};