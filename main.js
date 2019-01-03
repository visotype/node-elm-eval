(function(scope){
'use strict';

function F(arity, fun, wrapper) {
  wrapper.a = arity;
  wrapper.f = fun;
  return wrapper;
}

function F2(fun) {
  return F(2, fun, function(a) { return function(b) { return fun(a,b); }; })
}
function F3(fun) {
  return F(3, fun, function(a) {
    return function(b) { return function(c) { return fun(a, b, c); }; };
  });
}
function F4(fun) {
  return F(4, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return fun(a, b, c, d); }; }; };
  });
}
function F5(fun) {
  return F(5, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return fun(a, b, c, d, e); }; }; }; };
  });
}
function F6(fun) {
  return F(6, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return fun(a, b, c, d, e, f); }; }; }; }; };
  });
}
function F7(fun) {
  return F(7, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return fun(a, b, c, d, e, f, g); }; }; }; }; }; };
  });
}
function F8(fun) {
  return F(8, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) {
    return fun(a, b, c, d, e, f, g, h); }; }; }; }; }; }; };
  });
}
function F9(fun) {
  return F(9, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) { return function(i) {
    return fun(a, b, c, d, e, f, g, h, i); }; }; }; }; }; }; }; };
  });
}

function A2(fun, a, b) {
  return fun.a === 2 ? fun.f(a, b) : fun(a)(b);
}
function A3(fun, a, b, c) {
  return fun.a === 3 ? fun.f(a, b, c) : fun(a)(b)(c);
}
function A4(fun, a, b, c, d) {
  return fun.a === 4 ? fun.f(a, b, c, d) : fun(a)(b)(c)(d);
}
function A5(fun, a, b, c, d, e) {
  return fun.a === 5 ? fun.f(a, b, c, d, e) : fun(a)(b)(c)(d)(e);
}
function A6(fun, a, b, c, d, e, f) {
  return fun.a === 6 ? fun.f(a, b, c, d, e, f) : fun(a)(b)(c)(d)(e)(f);
}
function A7(fun, a, b, c, d, e, f, g) {
  return fun.a === 7 ? fun.f(a, b, c, d, e, f, g) : fun(a)(b)(c)(d)(e)(f)(g);
}
function A8(fun, a, b, c, d, e, f, g, h) {
  return fun.a === 8 ? fun.f(a, b, c, d, e, f, g, h) : fun(a)(b)(c)(d)(e)(f)(g)(h);
}
function A9(fun, a, b, c, d, e, f, g, h, i) {
  return fun.a === 9 ? fun.f(a, b, c, d, e, f, g, h, i) : fun(a)(b)(c)(d)(e)(f)(g)(h)(i);
}




var _JsArray_empty = [];

function _JsArray_singleton(value)
{
    return [value];
}

function _JsArray_length(array)
{
    return array.length;
}

var _JsArray_initialize = F3(function(size, offset, func)
{
    var result = new Array(size);

    for (var i = 0; i < size; i++)
    {
        result[i] = func(offset + i);
    }

    return result;
});

var _JsArray_initializeFromList = F2(function (max, ls)
{
    var result = new Array(max);

    for (var i = 0; i < max && ls.b; i++)
    {
        result[i] = ls.a;
        ls = ls.b;
    }

    result.length = i;
    return _Utils_Tuple2(result, ls);
});

var _JsArray_unsafeGet = F2(function(index, array)
{
    return array[index];
});

var _JsArray_unsafeSet = F3(function(index, value, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = array[i];
    }

    result[index] = value;
    return result;
});

var _JsArray_push = F2(function(value, array)
{
    var length = array.length;
    var result = new Array(length + 1);

    for (var i = 0; i < length; i++)
    {
        result[i] = array[i];
    }

    result[length] = value;
    return result;
});

var _JsArray_foldl = F3(function(func, acc, array)
{
    var length = array.length;

    for (var i = 0; i < length; i++)
    {
        acc = A2(func, array[i], acc);
    }

    return acc;
});

var _JsArray_foldr = F3(function(func, acc, array)
{
    for (var i = array.length - 1; i >= 0; i--)
    {
        acc = A2(func, array[i], acc);
    }

    return acc;
});

var _JsArray_map = F2(function(func, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = func(array[i]);
    }

    return result;
});

var _JsArray_indexedMap = F3(function(func, offset, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = A2(func, offset + i, array[i]);
    }

    return result;
});

var _JsArray_slice = F3(function(from, to, array)
{
    return array.slice(from, to);
});

var _JsArray_appendN = F3(function(n, dest, source)
{
    var destLen = dest.length;
    var itemsToCopy = n - destLen;

    if (itemsToCopy > source.length)
    {
        itemsToCopy = source.length;
    }

    var size = destLen + itemsToCopy;
    var result = new Array(size);

    for (var i = 0; i < destLen; i++)
    {
        result[i] = dest[i];
    }

    for (var i = 0; i < itemsToCopy; i++)
    {
        result[i + destLen] = source[i];
    }

    return result;
});



var _List_Nil = { $: 0 };
var _List_Nil_UNUSED = { $: '[]' };

function _List_Cons(hd, tl) { return { $: 1, a: hd, b: tl }; }
function _List_Cons_UNUSED(hd, tl) { return { $: '::', a: hd, b: tl }; }


var _List_cons = F2(_List_Cons);

function _List_fromArray(arr)
{
	var out = _List_Nil;
	for (var i = arr.length; i--; )
	{
		out = _List_Cons(arr[i], out);
	}
	return out;
}

function _List_toArray(xs)
{
	for (var out = []; xs.b; xs = xs.b) // WHILE_CONS
	{
		out.push(xs.a);
	}
	return out;
}

var _List_map2 = F3(function(f, xs, ys)
{
	for (var arr = []; xs.b && ys.b; xs = xs.b, ys = ys.b) // WHILE_CONSES
	{
		arr.push(A2(f, xs.a, ys.a));
	}
	return _List_fromArray(arr);
});

var _List_map3 = F4(function(f, xs, ys, zs)
{
	for (var arr = []; xs.b && ys.b && zs.b; xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A3(f, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_map4 = F5(function(f, ws, xs, ys, zs)
{
	for (var arr = []; ws.b && xs.b && ys.b && zs.b; ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A4(f, ws.a, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_map5 = F6(function(f, vs, ws, xs, ys, zs)
{
	for (var arr = []; vs.b && ws.b && xs.b && ys.b && zs.b; vs = vs.b, ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A5(f, vs.a, ws.a, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_sortBy = F2(function(f, xs)
{
	return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
		return _Utils_cmp(f(a), f(b));
	}));
});

var _List_sortWith = F2(function(f, xs)
{
	return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
		var ord = A2(f, a, b);
		return ord === elm$core$Basics$EQ ? 0 : ord === elm$core$Basics$LT ? -1 : 1;
	}));
});



// LOG

var _Debug_log = F2(function(tag, value)
{
	return value;
});

var _Debug_log_UNUSED = F2(function(tag, value)
{
	console.log(tag + ': ' + _Debug_toString(value));
	return value;
});


// TODOS

function _Debug_todo(moduleName, region)
{
	return function(message) {
		_Debug_crash(8, moduleName, region, message);
	};
}

function _Debug_todoCase(moduleName, region, value)
{
	return function(message) {
		_Debug_crash(9, moduleName, region, value, message);
	};
}


// TO STRING

function _Debug_toString(value)
{
	return '<internals>';
}

function _Debug_toString_UNUSED(value)
{
	return _Debug_toAnsiString(false, value);
}

function _Debug_toAnsiString(ansi, value)
{
	if (typeof value === 'function')
	{
		return _Debug_internalColor(ansi, '<function>');
	}

	if (typeof value === 'boolean')
	{
		return _Debug_ctorColor(ansi, value ? 'True' : 'False');
	}

	if (typeof value === 'number')
	{
		return _Debug_numberColor(ansi, value + '');
	}

	if (value instanceof String)
	{
		return _Debug_charColor(ansi, "'" + _Debug_addSlashes(value, true) + "'");
	}

	if (typeof value === 'string')
	{
		return _Debug_stringColor(ansi, '"' + _Debug_addSlashes(value, false) + '"');
	}

	if (typeof value === 'object' && '$' in value)
	{
		var tag = value.$;

		if (typeof tag === 'number')
		{
			return _Debug_internalColor(ansi, '<internals>');
		}

		if (tag[0] === '#')
		{
			var output = [];
			for (var k in value)
			{
				if (k === '$') continue;
				output.push(_Debug_toAnsiString(ansi, value[k]));
			}
			return '(' + output.join(',') + ')';
		}

		if (tag === 'Set_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Set')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, elm$core$Set$toList(value));
		}

		if (tag === 'RBNode_elm_builtin' || tag === 'RBEmpty_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Dict')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, elm$core$Dict$toList(value));
		}

		if (tag === 'Array_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Array')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, elm$core$Array$toList(value));
		}

		if (tag === '::' || tag === '[]')
		{
			var output = '[';

			value.b && (output += _Debug_toAnsiString(ansi, value.a), value = value.b)

			for (; value.b; value = value.b) // WHILE_CONS
			{
				output += ',' + _Debug_toAnsiString(ansi, value.a);
			}
			return output + ']';
		}

		var output = '';
		for (var i in value)
		{
			if (i === '$') continue;
			var str = _Debug_toAnsiString(ansi, value[i]);
			var c0 = str[0];
			var parenless = c0 === '{' || c0 === '(' || c0 === '[' || c0 === '<' || c0 === '"' || str.indexOf(' ') < 0;
			output += ' ' + (parenless ? str : '(' + str + ')');
		}
		return _Debug_ctorColor(ansi, tag) + output;
	}

	if (typeof DataView === 'function' && value instanceof DataView)
	{
		return _Debug_stringColor(ansi, '<' + value.byteLength + ' bytes>');
	}

	if (typeof File === 'function' && value instanceof File)
	{
		return _Debug_internalColor(ansi, '<' + value.name + '>');
	}

	if (typeof value === 'object')
	{
		var output = [];
		for (var key in value)
		{
			var field = key[0] === '_' ? key.slice(1) : key;
			output.push(_Debug_fadeColor(ansi, field) + ' = ' + _Debug_toAnsiString(ansi, value[key]));
		}
		if (output.length === 0)
		{
			return '{}';
		}
		return '{ ' + output.join(', ') + ' }';
	}

	return _Debug_internalColor(ansi, '<internals>');
}

function _Debug_addSlashes(str, isChar)
{
	var s = str
		.replace(/\\/g, '\\\\')
		.replace(/\n/g, '\\n')
		.replace(/\t/g, '\\t')
		.replace(/\r/g, '\\r')
		.replace(/\v/g, '\\v')
		.replace(/\0/g, '\\0');

	if (isChar)
	{
		return s.replace(/\'/g, '\\\'');
	}
	else
	{
		return s.replace(/\"/g, '\\"');
	}
}

function _Debug_ctorColor(ansi, string)
{
	return ansi ? '\x1b[96m' + string + '\x1b[0m' : string;
}

function _Debug_numberColor(ansi, string)
{
	return ansi ? '\x1b[95m' + string + '\x1b[0m' : string;
}

function _Debug_stringColor(ansi, string)
{
	return ansi ? '\x1b[93m' + string + '\x1b[0m' : string;
}

function _Debug_charColor(ansi, string)
{
	return ansi ? '\x1b[92m' + string + '\x1b[0m' : string;
}

function _Debug_fadeColor(ansi, string)
{
	return ansi ? '\x1b[37m' + string + '\x1b[0m' : string;
}

function _Debug_internalColor(ansi, string)
{
	return ansi ? '\x1b[94m' + string + '\x1b[0m' : string;
}

function _Debug_toHexDigit(n)
{
	return String.fromCharCode(n < 10 ? 48 + n : 55 + n);
}


// CRASH


function _Debug_crash(identifier)
{
	throw new Error('https://github.com/elm/core/blob/1.0.0/hints/' + identifier + '.md');
}


function _Debug_crash_UNUSED(identifier, fact1, fact2, fact3, fact4)
{
	switch(identifier)
	{
		case 0:
			throw new Error('What node should I take over? In JavaScript I need something like:\n\n    Elm.Main.init({\n        node: document.getElementById("elm-node")\n    })\n\nYou need to do this with any Browser.sandbox or Browser.element program.');

		case 1:
			throw new Error('Browser.application programs cannot handle URLs like this:\n\n    ' + document.location.href + '\n\nWhat is the root? The root of your file system? Try looking at this program with `elm reactor` or some other server.');

		case 2:
			var jsonErrorString = fact1;
			throw new Error('Problem with the flags given to your Elm program on initialization.\n\n' + jsonErrorString);

		case 3:
			var portName = fact1;
			throw new Error('There can only be one port named `' + portName + '`, but your program has multiple.');

		case 4:
			var portName = fact1;
			var problem = fact2;
			throw new Error('Trying to send an unexpected type of value through port `' + portName + '`:\n' + problem);

		case 5:
			throw new Error('Trying to use `(==)` on functions.\nThere is no way to know if functions are "the same" in the Elm sense.\nRead more about this at https://package.elm-lang.org/packages/elm/core/latest/Basics#== which describes why it is this way and what the better version will look like.');

		case 6:
			var moduleName = fact1;
			throw new Error('Your page is loading multiple Elm scripts with a module named ' + moduleName + '. Maybe a duplicate script is getting loaded accidentally? If not, rename one of them so I know which is which!');

		case 8:
			var moduleName = fact1;
			var region = fact2;
			var message = fact3;
			throw new Error('TODO in module `' + moduleName + '` ' + _Debug_regionToString(region) + '\n\n' + message);

		case 9:
			var moduleName = fact1;
			var region = fact2;
			var value = fact3;
			var message = fact4;
			throw new Error(
				'TODO in module `' + moduleName + '` from the `case` expression '
				+ _Debug_regionToString(region) + '\n\nIt received the following value:\n\n    '
				+ _Debug_toString(value).replace('\n', '\n    ')
				+ '\n\nBut the branch that handles it says:\n\n    ' + message.replace('\n', '\n    ')
			);

		case 10:
			throw new Error('Bug in https://github.com/elm/virtual-dom/issues');

		case 11:
			throw new Error('Cannot perform mod 0. Division by zero error.');
	}
}

function _Debug_regionToString(region)
{
	if (region.g.f === region.h.f)
	{
		return 'on line ' + region.g.f;
	}
	return 'on lines ' + region.g.f + ' through ' + region.h.f;
}



// EQUALITY

function _Utils_eq(x, y)
{
	for (
		var pair, stack = [], isEqual = _Utils_eqHelp(x, y, 0, stack);
		isEqual && (pair = stack.pop());
		isEqual = _Utils_eqHelp(pair.a, pair.b, 0, stack)
		)
	{}

	return isEqual;
}

function _Utils_eqHelp(x, y, depth, stack)
{
	if (depth > 100)
	{
		stack.push(_Utils_Tuple2(x,y));
		return true;
	}

	if (x === y)
	{
		return true;
	}

	if (typeof x !== 'object' || x === null || y === null)
	{
		typeof x === 'function' && _Debug_crash(5);
		return false;
	}

	/**_UNUSED/
	if (x.$ === 'Set_elm_builtin')
	{
		x = elm$core$Set$toList(x);
		y = elm$core$Set$toList(y);
	}
	if (x.$ === 'RBNode_elm_builtin' || x.$ === 'RBEmpty_elm_builtin')
	{
		x = elm$core$Dict$toList(x);
		y = elm$core$Dict$toList(y);
	}
	//*/

	/**/
	if (x.$ < 0)
	{
		x = elm$core$Dict$toList(x);
		y = elm$core$Dict$toList(y);
	}
	//*/

	for (var key in x)
	{
		if (!_Utils_eqHelp(x[key], y[key], depth + 1, stack))
		{
			return false;
		}
	}
	return true;
}

var _Utils_equal = F2(_Utils_eq);
var _Utils_notEqual = F2(function(a, b) { return !_Utils_eq(a,b); });



// COMPARISONS

// Code in Generate/JavaScript.hs, Basics.js, and List.js depends on
// the particular integer values assigned to LT, EQ, and GT.

function _Utils_cmp(x, y, ord)
{
	if (typeof x !== 'object')
	{
		return x === y ? /*EQ*/ 0 : x < y ? /*LT*/ -1 : /*GT*/ 1;
	}

	/**_UNUSED/
	if (x instanceof String)
	{
		var a = x.valueOf();
		var b = y.valueOf();
		return a === b ? 0 : a < b ? -1 : 1;
	}
	//*/

	/**/
	if (typeof x.$ === 'undefined')
	//*/
	/**_UNUSED/
	if (x.$[0] === '#')
	//*/
	{
		return (ord = _Utils_cmp(x.a, y.a))
			? ord
			: (ord = _Utils_cmp(x.b, y.b))
				? ord
				: _Utils_cmp(x.c, y.c);
	}

	// traverse conses until end of a list or a mismatch
	for (; x.b && y.b && !(ord = _Utils_cmp(x.a, y.a)); x = x.b, y = y.b) {} // WHILE_CONSES
	return ord || (x.b ? /*GT*/ 1 : y.b ? /*LT*/ -1 : /*EQ*/ 0);
}

var _Utils_lt = F2(function(a, b) { return _Utils_cmp(a, b) < 0; });
var _Utils_le = F2(function(a, b) { return _Utils_cmp(a, b) < 1; });
var _Utils_gt = F2(function(a, b) { return _Utils_cmp(a, b) > 0; });
var _Utils_ge = F2(function(a, b) { return _Utils_cmp(a, b) >= 0; });

var _Utils_compare = F2(function(x, y)
{
	var n = _Utils_cmp(x, y);
	return n < 0 ? elm$core$Basics$LT : n ? elm$core$Basics$GT : elm$core$Basics$EQ;
});


// COMMON VALUES

var _Utils_Tuple0 = 0;
var _Utils_Tuple0_UNUSED = { $: '#0' };

function _Utils_Tuple2(a, b) { return { a: a, b: b }; }
function _Utils_Tuple2_UNUSED(a, b) { return { $: '#2', a: a, b: b }; }

function _Utils_Tuple3(a, b, c) { return { a: a, b: b, c: c }; }
function _Utils_Tuple3_UNUSED(a, b, c) { return { $: '#3', a: a, b: b, c: c }; }

function _Utils_chr(c) { return c; }
function _Utils_chr_UNUSED(c) { return new String(c); }


// RECORDS

function _Utils_update(oldRecord, updatedFields)
{
	var newRecord = {};

	for (var key in oldRecord)
	{
		newRecord[key] = oldRecord[key];
	}

	for (var key in updatedFields)
	{
		newRecord[key] = updatedFields[key];
	}

	return newRecord;
}


// APPEND

var _Utils_append = F2(_Utils_ap);

function _Utils_ap(xs, ys)
{
	// append Strings
	if (typeof xs === 'string')
	{
		return xs + ys;
	}

	// append Lists
	if (!xs.b)
	{
		return ys;
	}
	var root = _List_Cons(xs.a, ys);
	xs = xs.b
	for (var curr = root; xs.b; xs = xs.b) // WHILE_CONS
	{
		curr = curr.b = _List_Cons(xs.a, ys);
	}
	return root;
}



// MATH

var _Basics_add = F2(function(a, b) { return a + b; });
var _Basics_sub = F2(function(a, b) { return a - b; });
var _Basics_mul = F2(function(a, b) { return a * b; });
var _Basics_fdiv = F2(function(a, b) { return a / b; });
var _Basics_idiv = F2(function(a, b) { return (a / b) | 0; });
var _Basics_pow = F2(Math.pow);

var _Basics_remainderBy = F2(function(b, a) { return a % b; });

// https://www.microsoft.com/en-us/research/wp-content/uploads/2016/02/divmodnote-letter.pdf
var _Basics_modBy = F2(function(modulus, x)
{
	var answer = x % modulus;
	return modulus === 0
		? _Debug_crash(11)
		:
	((answer > 0 && modulus < 0) || (answer < 0 && modulus > 0))
		? answer + modulus
		: answer;
});


// TRIGONOMETRY

var _Basics_pi = Math.PI;
var _Basics_e = Math.E;
var _Basics_cos = Math.cos;
var _Basics_sin = Math.sin;
var _Basics_tan = Math.tan;
var _Basics_acos = Math.acos;
var _Basics_asin = Math.asin;
var _Basics_atan = Math.atan;
var _Basics_atan2 = F2(Math.atan2);


// MORE MATH

function _Basics_toFloat(x) { return x; }
function _Basics_truncate(n) { return n | 0; }
function _Basics_isInfinite(n) { return n === Infinity || n === -Infinity; }

var _Basics_ceiling = Math.ceil;
var _Basics_floor = Math.floor;
var _Basics_round = Math.round;
var _Basics_sqrt = Math.sqrt;
var _Basics_log = Math.log;
var _Basics_isNaN = isNaN;


// BOOLEANS

function _Basics_not(bool) { return !bool; }
var _Basics_and = F2(function(a, b) { return a && b; });
var _Basics_or  = F2(function(a, b) { return a || b; });
var _Basics_xor = F2(function(a, b) { return a !== b; });



var _String_cons = F2(function(chr, str)
{
	return chr + str;
});

function _String_uncons(string)
{
	var word = string.charCodeAt(0);
	return word
		? elm$core$Maybe$Just(
			0xD800 <= word && word <= 0xDBFF
				? _Utils_Tuple2(_Utils_chr(string[0] + string[1]), string.slice(2))
				: _Utils_Tuple2(_Utils_chr(string[0]), string.slice(1))
		)
		: elm$core$Maybe$Nothing;
}

var _String_append = F2(function(a, b)
{
	return a + b;
});

function _String_length(str)
{
	return str.length;
}

var _String_map = F2(function(func, string)
{
	var len = string.length;
	var array = new Array(len);
	var i = 0;
	while (i < len)
	{
		var word = string.charCodeAt(i);
		if (0xD800 <= word && word <= 0xDBFF)
		{
			array[i] = func(_Utils_chr(string[i] + string[i+1]));
			i += 2;
			continue;
		}
		array[i] = func(_Utils_chr(string[i]));
		i++;
	}
	return array.join('');
});

var _String_filter = F2(function(isGood, str)
{
	var arr = [];
	var len = str.length;
	var i = 0;
	while (i < len)
	{
		var char = str[i];
		var word = str.charCodeAt(i);
		i++;
		if (0xD800 <= word && word <= 0xDBFF)
		{
			char += str[i];
			i++;
		}

		if (isGood(_Utils_chr(char)))
		{
			arr.push(char);
		}
	}
	return arr.join('');
});

function _String_reverse(str)
{
	var len = str.length;
	var arr = new Array(len);
	var i = 0;
	while (i < len)
	{
		var word = str.charCodeAt(i);
		if (0xD800 <= word && word <= 0xDBFF)
		{
			arr[len - i] = str[i + 1];
			i++;
			arr[len - i] = str[i - 1];
			i++;
		}
		else
		{
			arr[len - i] = str[i];
			i++;
		}
	}
	return arr.join('');
}

var _String_foldl = F3(function(func, state, string)
{
	var len = string.length;
	var i = 0;
	while (i < len)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		i++;
		if (0xD800 <= word && word <= 0xDBFF)
		{
			char += string[i];
			i++;
		}
		state = A2(func, _Utils_chr(char), state);
	}
	return state;
});

var _String_foldr = F3(function(func, state, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		state = A2(func, _Utils_chr(char), state);
	}
	return state;
});

var _String_split = F2(function(sep, str)
{
	return str.split(sep);
});

var _String_join = F2(function(sep, strs)
{
	return strs.join(sep);
});

var _String_slice = F3(function(start, end, str) {
	return str.slice(start, end);
});

function _String_trim(str)
{
	return str.trim();
}

function _String_trimLeft(str)
{
	return str.replace(/^\s+/, '');
}

function _String_trimRight(str)
{
	return str.replace(/\s+$/, '');
}

function _String_words(str)
{
	return _List_fromArray(str.trim().split(/\s+/g));
}

function _String_lines(str)
{
	return _List_fromArray(str.split(/\r\n|\r|\n/g));
}

function _String_toUpper(str)
{
	return str.toUpperCase();
}

function _String_toLower(str)
{
	return str.toLowerCase();
}

var _String_any = F2(function(isGood, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		if (isGood(_Utils_chr(char)))
		{
			return true;
		}
	}
	return false;
});

var _String_all = F2(function(isGood, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		if (!isGood(_Utils_chr(char)))
		{
			return false;
		}
	}
	return true;
});

var _String_contains = F2(function(sub, str)
{
	return str.indexOf(sub) > -1;
});

var _String_startsWith = F2(function(sub, str)
{
	return str.indexOf(sub) === 0;
});

var _String_endsWith = F2(function(sub, str)
{
	return str.length >= sub.length &&
		str.lastIndexOf(sub) === str.length - sub.length;
});

var _String_indexes = F2(function(sub, str)
{
	var subLen = sub.length;

	if (subLen < 1)
	{
		return _List_Nil;
	}

	var i = 0;
	var is = [];

	while ((i = str.indexOf(sub, i)) > -1)
	{
		is.push(i);
		i = i + subLen;
	}

	return _List_fromArray(is);
});


// TO STRING

function _String_fromNumber(number)
{
	return number + '';
}


// INT CONVERSIONS

function _String_toInt(str)
{
	var total = 0;
	var code0 = str.charCodeAt(0);
	var start = code0 == 0x2B /* + */ || code0 == 0x2D /* - */ ? 1 : 0;

	for (var i = start; i < str.length; ++i)
	{
		var code = str.charCodeAt(i);
		if (code < 0x30 || 0x39 < code)
		{
			return elm$core$Maybe$Nothing;
		}
		total = 10 * total + code - 0x30;
	}

	return i == start
		? elm$core$Maybe$Nothing
		: elm$core$Maybe$Just(code0 == 0x2D ? -total : total);
}


// FLOAT CONVERSIONS

function _String_toFloat(s)
{
	// check if it is a hex, octal, or binary number
	if (s.length === 0 || /[\sxbo]/.test(s))
	{
		return elm$core$Maybe$Nothing;
	}
	var n = +s;
	// faster isNaN check
	return n === n ? elm$core$Maybe$Just(n) : elm$core$Maybe$Nothing;
}

function _String_fromList(chars)
{
	return _List_toArray(chars).join('');
}




function _Char_toCode(char)
{
	var code = char.charCodeAt(0);
	if (0xD800 <= code && code <= 0xDBFF)
	{
		return (code - 0xD800) * 0x400 + char.charCodeAt(1) - 0xDC00 + 0x10000
	}
	return code;
}

function _Char_fromCode(code)
{
	return _Utils_chr(
		(code < 0 || 0x10FFFF < code)
			? '\uFFFD'
			:
		(code <= 0xFFFF)
			? String.fromCharCode(code)
			:
		(code -= 0x10000,
			String.fromCharCode(Math.floor(code / 0x400) + 0xD800, code % 0x400 + 0xDC00)
		)
	);
}

function _Char_toUpper(char)
{
	return _Utils_chr(char.toUpperCase());
}

function _Char_toLower(char)
{
	return _Utils_chr(char.toLowerCase());
}

function _Char_toLocaleUpper(char)
{
	return _Utils_chr(char.toLocaleUpperCase());
}

function _Char_toLocaleLower(char)
{
	return _Utils_chr(char.toLocaleLowerCase());
}



/**_UNUSED/
function _Json_errorToString(error)
{
	return elm$json$Json$Decode$errorToString(error);
}
//*/


// CORE DECODERS

function _Json_succeed(msg)
{
	return {
		$: 0,
		a: msg
	};
}

function _Json_fail(msg)
{
	return {
		$: 1,
		a: msg
	};
}

function _Json_decodePrim(decoder)
{
	return { $: 2, b: decoder };
}

var _Json_decodeInt = _Json_decodePrim(function(value) {
	return (typeof value !== 'number')
		? _Json_expecting('an INT', value)
		:
	(-2147483647 < value && value < 2147483647 && (value | 0) === value)
		? elm$core$Result$Ok(value)
		:
	(isFinite(value) && !(value % 1))
		? elm$core$Result$Ok(value)
		: _Json_expecting('an INT', value);
});

var _Json_decodeBool = _Json_decodePrim(function(value) {
	return (typeof value === 'boolean')
		? elm$core$Result$Ok(value)
		: _Json_expecting('a BOOL', value);
});

var _Json_decodeFloat = _Json_decodePrim(function(value) {
	return (typeof value === 'number')
		? elm$core$Result$Ok(value)
		: _Json_expecting('a FLOAT', value);
});

var _Json_decodeValue = _Json_decodePrim(function(value) {
	return elm$core$Result$Ok(_Json_wrap(value));
});

var _Json_decodeString = _Json_decodePrim(function(value) {
	return (typeof value === 'string')
		? elm$core$Result$Ok(value)
		: (value instanceof String)
			? elm$core$Result$Ok(value + '')
			: _Json_expecting('a STRING', value);
});

function _Json_decodeList(decoder) { return { $: 3, b: decoder }; }
function _Json_decodeArray(decoder) { return { $: 4, b: decoder }; }

function _Json_decodeNull(value) { return { $: 5, c: value }; }

var _Json_decodeField = F2(function(field, decoder)
{
	return {
		$: 6,
		d: field,
		b: decoder
	};
});

var _Json_decodeIndex = F2(function(index, decoder)
{
	return {
		$: 7,
		e: index,
		b: decoder
	};
});

function _Json_decodeKeyValuePairs(decoder)
{
	return {
		$: 8,
		b: decoder
	};
}

function _Json_mapMany(f, decoders)
{
	return {
		$: 9,
		f: f,
		g: decoders
	};
}

var _Json_andThen = F2(function(callback, decoder)
{
	return {
		$: 10,
		b: decoder,
		h: callback
	};
});

function _Json_oneOf(decoders)
{
	return {
		$: 11,
		g: decoders
	};
}


// DECODING OBJECTS

var _Json_map1 = F2(function(f, d1)
{
	return _Json_mapMany(f, [d1]);
});

var _Json_map2 = F3(function(f, d1, d2)
{
	return _Json_mapMany(f, [d1, d2]);
});

var _Json_map3 = F4(function(f, d1, d2, d3)
{
	return _Json_mapMany(f, [d1, d2, d3]);
});

var _Json_map4 = F5(function(f, d1, d2, d3, d4)
{
	return _Json_mapMany(f, [d1, d2, d3, d4]);
});

var _Json_map5 = F6(function(f, d1, d2, d3, d4, d5)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5]);
});

var _Json_map6 = F7(function(f, d1, d2, d3, d4, d5, d6)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6]);
});

var _Json_map7 = F8(function(f, d1, d2, d3, d4, d5, d6, d7)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7]);
});

var _Json_map8 = F9(function(f, d1, d2, d3, d4, d5, d6, d7, d8)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7, d8]);
});


// DECODE

var _Json_runOnString = F2(function(decoder, string)
{
	try
	{
		var value = JSON.parse(string);
		return _Json_runHelp(decoder, value);
	}
	catch (e)
	{
		return elm$core$Result$Err(A2(elm$json$Json$Decode$Failure, 'This is not valid JSON! ' + e.message, _Json_wrap(string)));
	}
});

var _Json_run = F2(function(decoder, value)
{
	return _Json_runHelp(decoder, _Json_unwrap(value));
});

function _Json_runHelp(decoder, value)
{
	switch (decoder.$)
	{
		case 2:
			return decoder.b(value);

		case 5:
			return (value === null)
				? elm$core$Result$Ok(decoder.c)
				: _Json_expecting('null', value);

		case 3:
			if (!_Json_isArray(value))
			{
				return _Json_expecting('a LIST', value);
			}
			return _Json_runArrayDecoder(decoder.b, value, _List_fromArray);

		case 4:
			if (!_Json_isArray(value))
			{
				return _Json_expecting('an ARRAY', value);
			}
			return _Json_runArrayDecoder(decoder.b, value, _Json_toElmArray);

		case 6:
			var field = decoder.d;
			if (typeof value !== 'object' || value === null || !(field in value))
			{
				return _Json_expecting('an OBJECT with a field named `' + field + '`', value);
			}
			var result = _Json_runHelp(decoder.b, value[field]);
			return (elm$core$Result$isOk(result)) ? result : elm$core$Result$Err(A2(elm$json$Json$Decode$Field, field, result.a));

		case 7:
			var index = decoder.e;
			if (!_Json_isArray(value))
			{
				return _Json_expecting('an ARRAY', value);
			}
			if (index >= value.length)
			{
				return _Json_expecting('a LONGER array. Need index ' + index + ' but only see ' + value.length + ' entries', value);
			}
			var result = _Json_runHelp(decoder.b, value[index]);
			return (elm$core$Result$isOk(result)) ? result : elm$core$Result$Err(A2(elm$json$Json$Decode$Index, index, result.a));

		case 8:
			if (typeof value !== 'object' || value === null || _Json_isArray(value))
			{
				return _Json_expecting('an OBJECT', value);
			}

			var keyValuePairs = _List_Nil;
			// TODO test perf of Object.keys and switch when support is good enough
			for (var key in value)
			{
				if (value.hasOwnProperty(key))
				{
					var result = _Json_runHelp(decoder.b, value[key]);
					if (!elm$core$Result$isOk(result))
					{
						return elm$core$Result$Err(A2(elm$json$Json$Decode$Field, key, result.a));
					}
					keyValuePairs = _List_Cons(_Utils_Tuple2(key, result.a), keyValuePairs);
				}
			}
			return elm$core$Result$Ok(elm$core$List$reverse(keyValuePairs));

		case 9:
			var answer = decoder.f;
			var decoders = decoder.g;
			for (var i = 0; i < decoders.length; i++)
			{
				var result = _Json_runHelp(decoders[i], value);
				if (!elm$core$Result$isOk(result))
				{
					return result;
				}
				answer = answer(result.a);
			}
			return elm$core$Result$Ok(answer);

		case 10:
			var result = _Json_runHelp(decoder.b, value);
			return (!elm$core$Result$isOk(result))
				? result
				: _Json_runHelp(decoder.h(result.a), value);

		case 11:
			var errors = _List_Nil;
			for (var temp = decoder.g; temp.b; temp = temp.b) // WHILE_CONS
			{
				var result = _Json_runHelp(temp.a, value);
				if (elm$core$Result$isOk(result))
				{
					return result;
				}
				errors = _List_Cons(result.a, errors);
			}
			return elm$core$Result$Err(elm$json$Json$Decode$OneOf(elm$core$List$reverse(errors)));

		case 1:
			return elm$core$Result$Err(A2(elm$json$Json$Decode$Failure, decoder.a, _Json_wrap(value)));

		case 0:
			return elm$core$Result$Ok(decoder.a);
	}
}

function _Json_runArrayDecoder(decoder, value, toElmValue)
{
	var len = value.length;
	var array = new Array(len);
	for (var i = 0; i < len; i++)
	{
		var result = _Json_runHelp(decoder, value[i]);
		if (!elm$core$Result$isOk(result))
		{
			return elm$core$Result$Err(A2(elm$json$Json$Decode$Index, i, result.a));
		}
		array[i] = result.a;
	}
	return elm$core$Result$Ok(toElmValue(array));
}

function _Json_isArray(value)
{
	return Array.isArray(value) || (typeof FileList === 'function' && value instanceof FileList);
}

function _Json_toElmArray(array)
{
	return A2(elm$core$Array$initialize, array.length, function(i) { return array[i]; });
}

function _Json_expecting(type, value)
{
	return elm$core$Result$Err(A2(elm$json$Json$Decode$Failure, 'Expecting ' + type, _Json_wrap(value)));
}


// EQUALITY

function _Json_equality(x, y)
{
	if (x === y)
	{
		return true;
	}

	if (x.$ !== y.$)
	{
		return false;
	}

	switch (x.$)
	{
		case 0:
		case 1:
			return x.a === y.a;

		case 2:
			return x.b === y.b;

		case 5:
			return x.c === y.c;

		case 3:
		case 4:
		case 8:
			return _Json_equality(x.b, y.b);

		case 6:
			return x.d === y.d && _Json_equality(x.b, y.b);

		case 7:
			return x.e === y.e && _Json_equality(x.b, y.b);

		case 9:
			return x.f === y.f && _Json_listEquality(x.g, y.g);

		case 10:
			return x.h === y.h && _Json_equality(x.b, y.b);

		case 11:
			return _Json_listEquality(x.g, y.g);
	}
}

function _Json_listEquality(aDecoders, bDecoders)
{
	var len = aDecoders.length;
	if (len !== bDecoders.length)
	{
		return false;
	}
	for (var i = 0; i < len; i++)
	{
		if (!_Json_equality(aDecoders[i], bDecoders[i]))
		{
			return false;
		}
	}
	return true;
}


// ENCODE

var _Json_encode = F2(function(indentLevel, value)
{
	return JSON.stringify(_Json_unwrap(value), null, indentLevel) + '';
});

function _Json_wrap_UNUSED(value) { return { $: 0, a: value }; }
function _Json_unwrap_UNUSED(value) { return value.a; }

function _Json_wrap(value) { return value; }
function _Json_unwrap(value) { return value; }

function _Json_emptyArray() { return []; }
function _Json_emptyObject() { return {}; }

var _Json_addField = F3(function(key, value, object)
{
	object[key] = _Json_unwrap(value);
	return object;
});

function _Json_addEntry(func)
{
	return F2(function(entry, array)
	{
		array.push(_Json_unwrap(func(entry)));
		return array;
	});
}

var _Json_encodeNull = _Json_wrap(null);



// TASKS

function _Scheduler_succeed(value)
{
	return {
		$: 0,
		a: value
	};
}

function _Scheduler_fail(error)
{
	return {
		$: 1,
		a: error
	};
}

function _Scheduler_binding(callback)
{
	return {
		$: 2,
		b: callback,
		c: null
	};
}

var _Scheduler_andThen = F2(function(callback, task)
{
	return {
		$: 3,
		b: callback,
		d: task
	};
});

var _Scheduler_onError = F2(function(callback, task)
{
	return {
		$: 4,
		b: callback,
		d: task
	};
});

function _Scheduler_receive(callback)
{
	return {
		$: 5,
		b: callback
	};
}


// PROCESSES

var _Scheduler_guid = 0;

function _Scheduler_rawSpawn(task)
{
	var proc = {
		$: 0,
		e: _Scheduler_guid++,
		f: task,
		g: null,
		h: []
	};

	_Scheduler_enqueue(proc);

	return proc;
}

function _Scheduler_spawn(task)
{
	return _Scheduler_binding(function(callback) {
		callback(_Scheduler_succeed(_Scheduler_rawSpawn(task)));
	});
}

function _Scheduler_rawSend(proc, msg)
{
	proc.h.push(msg);
	_Scheduler_enqueue(proc);
}

var _Scheduler_send = F2(function(proc, msg)
{
	return _Scheduler_binding(function(callback) {
		_Scheduler_rawSend(proc, msg);
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
});

function _Scheduler_kill(proc)
{
	return _Scheduler_binding(function(callback) {
		var task = proc.f;
		if (task.$ === 2 && task.c)
		{
			task.c();
		}

		proc.f = null;

		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
}


/* STEP PROCESSES

type alias Process =
  { $ : tag
  , id : unique_id
  , root : Task
  , stack : null | { $: SUCCEED | FAIL, a: callback, b: stack }
  , mailbox : [msg]
  }

*/


var _Scheduler_working = false;
var _Scheduler_queue = [];


function _Scheduler_enqueue(proc)
{
	_Scheduler_queue.push(proc);
	if (_Scheduler_working)
	{
		return;
	}
	_Scheduler_working = true;
	while (proc = _Scheduler_queue.shift())
	{
		_Scheduler_step(proc);
	}
	_Scheduler_working = false;
}


function _Scheduler_step(proc)
{
	while (proc.f)
	{
		var rootTag = proc.f.$;
		if (rootTag === 0 || rootTag === 1)
		{
			while (proc.g && proc.g.$ !== rootTag)
			{
				proc.g = proc.g.i;
			}
			if (!proc.g)
			{
				return;
			}
			proc.f = proc.g.b(proc.f.a);
			proc.g = proc.g.i;
		}
		else if (rootTag === 2)
		{
			proc.f.c = proc.f.b(function(newRoot) {
				proc.f = newRoot;
				_Scheduler_enqueue(proc);
			});
			return;
		}
		else if (rootTag === 5)
		{
			if (proc.h.length === 0)
			{
				return;
			}
			proc.f = proc.f.b(proc.h.shift());
		}
		else // if (rootTag === 3 || rootTag === 4)
		{
			proc.g = {
				$: rootTag === 3 ? 0 : 1,
				b: proc.f.b,
				i: proc.g
			};
			proc.f = proc.f.d;
		}
	}
}



function _Process_sleep(time)
{
	return _Scheduler_binding(function(callback) {
		var id = setTimeout(function() {
			callback(_Scheduler_succeed(_Utils_Tuple0));
		}, time);

		return function() { clearTimeout(id); };
	});
}




// PROGRAMS


var _Platform_worker = F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.i,
		impl.k,
		impl.j,
		function() { return function() {} }
	);
});



// INITIALIZE A PROGRAM


function _Platform_initialize(flagDecoder, args, init, update, subscriptions, stepperBuilder)
{
	var result = A2(_Json_run, flagDecoder, _Json_wrap(args ? args['flags'] : undefined));
	elm$core$Result$isOk(result) || _Debug_crash(2 /**_UNUSED/, _Json_errorToString(result.a) /**/);
	var managers = {};
	result = init(result.a);
	var model = result.a;
	var stepper = stepperBuilder(sendToApp, model);
	var ports = _Platform_setupEffects(managers, sendToApp);

	function sendToApp(msg, viewMetadata)
	{
		result = A2(update, msg, model);
		stepper(model = result.a, viewMetadata);
		_Platform_dispatchEffects(managers, result.b, subscriptions(model));
	}

	_Platform_dispatchEffects(managers, result.b, subscriptions(model));

	return ports ? { ports: ports } : {};
}



// TRACK PRELOADS
//
// This is used by code in elm/browser and elm/http
// to register any HTTP requests that are triggered by init.
//


var _Platform_preload;


function _Platform_registerPreload(url)
{
	_Platform_preload.add(url);
}



// EFFECT MANAGERS


var _Platform_effectManagers = {};


function _Platform_setupEffects(managers, sendToApp)
{
	var ports;

	// setup all necessary effect managers
	for (var key in _Platform_effectManagers)
	{
		var manager = _Platform_effectManagers[key];

		if (manager.a)
		{
			ports = ports || {};
			ports[key] = manager.a(key, sendToApp);
		}

		managers[key] = _Platform_instantiateManager(manager, sendToApp);
	}

	return ports;
}


function _Platform_createManager(init, onEffects, onSelfMsg, cmdMap, subMap)
{
	return {
		b: init,
		c: onEffects,
		d: onSelfMsg,
		e: cmdMap,
		f: subMap
	};
}


function _Platform_instantiateManager(info, sendToApp)
{
	var router = {
		g: sendToApp,
		h: undefined
	};

	var onEffects = info.c;
	var onSelfMsg = info.d;
	var cmdMap = info.e;
	var subMap = info.f;

	function loop(state)
	{
		return A2(_Scheduler_andThen, loop, _Scheduler_receive(function(msg)
		{
			var value = msg.a;

			if (msg.$ === 0)
			{
				return A3(onSelfMsg, router, value, state);
			}

			return cmdMap && subMap
				? A4(onEffects, router, value.i, value.j, state)
				: A3(onEffects, router, cmdMap ? value.i : value.j, state);
		}));
	}

	return router.h = _Scheduler_rawSpawn(A2(_Scheduler_andThen, loop, info.b));
}



// ROUTING


var _Platform_sendToApp = F2(function(router, msg)
{
	return _Scheduler_binding(function(callback)
	{
		router.g(msg);
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
});


var _Platform_sendToSelf = F2(function(router, msg)
{
	return A2(_Scheduler_send, router.h, {
		$: 0,
		a: msg
	});
});



// BAGS


function _Platform_leaf(home)
{
	return function(value)
	{
		return {
			$: 1,
			k: home,
			l: value
		};
	};
}


function _Platform_batch(list)
{
	return {
		$: 2,
		m: list
	};
}


var _Platform_map = F2(function(tagger, bag)
{
	return {
		$: 3,
		n: tagger,
		o: bag
	}
});



// PIPE BAGS INTO EFFECT MANAGERS


function _Platform_dispatchEffects(managers, cmdBag, subBag)
{
	var effectsDict = {};
	_Platform_gatherEffects(true, cmdBag, effectsDict, null);
	_Platform_gatherEffects(false, subBag, effectsDict, null);

	for (var home in managers)
	{
		_Scheduler_rawSend(managers[home], {
			$: 'fx',
			a: effectsDict[home] || { i: _List_Nil, j: _List_Nil }
		});
	}
}


function _Platform_gatherEffects(isCmd, bag, effectsDict, taggers)
{
	switch (bag.$)
	{
		case 1:
			var home = bag.k;
			var effect = _Platform_toEffect(isCmd, home, taggers, bag.l);
			effectsDict[home] = _Platform_insert(isCmd, effect, effectsDict[home]);
			return;

		case 2:
			for (var list = bag.m; list.b; list = list.b) // WHILE_CONS
			{
				_Platform_gatherEffects(isCmd, list.a, effectsDict, taggers);
			}
			return;

		case 3:
			_Platform_gatherEffects(isCmd, bag.o, effectsDict, {
				p: bag.n,
				q: taggers
			});
			return;
	}
}


function _Platform_toEffect(isCmd, home, taggers, value)
{
	function applyTaggers(x)
	{
		for (var temp = taggers; temp; temp = temp.q)
		{
			x = temp.p(x);
		}
		return x;
	}

	var map = isCmd
		? _Platform_effectManagers[home].e
		: _Platform_effectManagers[home].f;

	return A2(map, applyTaggers, value)
}


function _Platform_insert(isCmd, newEffect, effects)
{
	effects = effects || { i: _List_Nil, j: _List_Nil };

	isCmd
		? (effects.i = _List_Cons(newEffect, effects.i))
		: (effects.j = _List_Cons(newEffect, effects.j));

	return effects;
}



// PORTS


function _Platform_checkPortName(name)
{
	if (_Platform_effectManagers[name])
	{
		_Debug_crash(3, name)
	}
}



// OUTGOING PORTS


function _Platform_outgoingPort(name, converter)
{
	_Platform_checkPortName(name);
	_Platform_effectManagers[name] = {
		e: _Platform_outgoingPortMap,
		r: converter,
		a: _Platform_setupOutgoingPort
	};
	return _Platform_leaf(name);
}


var _Platform_outgoingPortMap = F2(function(tagger, value) { return value; });


function _Platform_setupOutgoingPort(name)
{
	var subs = [];
	var converter = _Platform_effectManagers[name].r;

	// CREATE MANAGER

	var init = _Process_sleep(0);

	_Platform_effectManagers[name].b = init;
	_Platform_effectManagers[name].c = F3(function(router, cmdList, state)
	{
		for ( ; cmdList.b; cmdList = cmdList.b) // WHILE_CONS
		{
			// grab a separate reference to subs in case unsubscribe is called
			var currentSubs = subs;
			var value = _Json_unwrap(converter(cmdList.a));
			for (var i = 0; i < currentSubs.length; i++)
			{
				currentSubs[i](value);
			}
		}
		return init;
	});

	// PUBLIC API

	function subscribe(callback)
	{
		subs.push(callback);
	}

	function unsubscribe(callback)
	{
		// copy subs into a new array in case unsubscribe is called within a
		// subscribed callback
		subs = subs.slice();
		var index = subs.indexOf(callback);
		if (index >= 0)
		{
			subs.splice(index, 1);
		}
	}

	return {
		subscribe: subscribe,
		unsubscribe: unsubscribe
	};
}



// INCOMING PORTS


function _Platform_incomingPort(name, converter)
{
	_Platform_checkPortName(name);
	_Platform_effectManagers[name] = {
		f: _Platform_incomingPortMap,
		r: converter,
		a: _Platform_setupIncomingPort
	};
	return _Platform_leaf(name);
}


var _Platform_incomingPortMap = F2(function(tagger, finalTagger)
{
	return function(value)
	{
		return tagger(finalTagger(value));
	};
});


function _Platform_setupIncomingPort(name, sendToApp)
{
	var subs = _List_Nil;
	var converter = _Platform_effectManagers[name].r;

	// CREATE MANAGER

	var init = _Scheduler_succeed(null);

	_Platform_effectManagers[name].b = init;
	_Platform_effectManagers[name].c = F3(function(router, subList, state)
	{
		subs = subList;
		return init;
	});

	// PUBLIC API

	function send(incomingValue)
	{
		var result = A2(_Json_run, converter, _Json_wrap(incomingValue));

		elm$core$Result$isOk(result) || _Debug_crash(4, name, result.a);

		var value = result.a;
		for (var temp = subs; temp.b; temp = temp.b) // WHILE_CONS
		{
			sendToApp(temp.a(value));
		}
	}

	return { send: send };
}



// EXPORT ELM MODULES
//
// Have DEBUG and PROD versions so that we can (1) give nicer errors in
// debug mode and (2) not pay for the bits needed for that in prod mode.
//


function _Platform_export(exports)
{
	scope['Elm']
		? _Platform_mergeExportsProd(scope['Elm'], exports)
		: scope['Elm'] = exports;
}


function _Platform_mergeExportsProd(obj, exports)
{
	for (var name in exports)
	{
		(name in obj)
			? (name == 'init')
				? _Debug_crash(6)
				: _Platform_mergeExportsProd(obj[name], exports[name])
			: (obj[name] = exports[name]);
	}
}


function _Platform_export_UNUSED(exports)
{
	scope['Elm']
		? _Platform_mergeExportsDebug('Elm', scope['Elm'], exports)
		: scope['Elm'] = exports;
}


function _Platform_mergeExportsDebug(moduleName, obj, exports)
{
	for (var name in exports)
	{
		(name in obj)
			? (name == 'init')
				? _Debug_crash(6, moduleName)
				: _Platform_mergeExportsDebug(moduleName + '.' + name, obj[name], exports[name])
			: (obj[name] = exports[name]);
	}
}
var elm$core$Maybe$Just = function (a) {
	return {$: 0, a: a};
};
var elm$core$Maybe$Nothing = {$: 1};
var elm$core$Elm$JsArray$foldr = _JsArray_foldr;
var elm$core$Array$foldr = F3(
	function (func, baseCase, _n0) {
		var tree = _n0.c;
		var tail = _n0.d;
		var helper = F2(
			function (node, acc) {
				if (!node.$) {
					var subTree = node.a;
					return A3(elm$core$Elm$JsArray$foldr, helper, acc, subTree);
				} else {
					var values = node.a;
					return A3(elm$core$Elm$JsArray$foldr, func, acc, values);
				}
			});
		return A3(
			elm$core$Elm$JsArray$foldr,
			helper,
			A3(elm$core$Elm$JsArray$foldr, func, baseCase, tail),
			tree);
	});
var elm$core$Basics$EQ = 1;
var elm$core$Basics$LT = 0;
var elm$core$List$cons = _List_cons;
var elm$core$Array$toList = function (array) {
	return A3(elm$core$Array$foldr, elm$core$List$cons, _List_Nil, array);
};
var elm$core$Basics$GT = 2;
var elm$core$Dict$foldr = F3(
	function (func, acc, t) {
		foldr:
		while (true) {
			if (t.$ === -2) {
				return acc;
			} else {
				var key = t.b;
				var value = t.c;
				var left = t.d;
				var right = t.e;
				var $temp$func = func,
					$temp$acc = A3(
					func,
					key,
					value,
					A3(elm$core$Dict$foldr, func, acc, right)),
					$temp$t = left;
				func = $temp$func;
				acc = $temp$acc;
				t = $temp$t;
				continue foldr;
			}
		}
	});
var elm$core$Dict$toList = function (dict) {
	return A3(
		elm$core$Dict$foldr,
		F3(
			function (key, value, list) {
				return A2(
					elm$core$List$cons,
					_Utils_Tuple2(key, value),
					list);
			}),
		_List_Nil,
		dict);
};
var elm$core$Dict$keys = function (dict) {
	return A3(
		elm$core$Dict$foldr,
		F3(
			function (key, value, keyList) {
				return A2(elm$core$List$cons, key, keyList);
			}),
		_List_Nil,
		dict);
};
var elm$core$Set$toList = function (_n0) {
	var dict = _n0;
	return elm$core$Dict$keys(dict);
};
var author$project$Eval$Try$empty = function (ls) {
	if (!ls.b) {
		return elm$core$Maybe$Just(0);
	} else {
		return elm$core$Maybe$Nothing;
	}
};
var author$project$Eval$Try$singleton = function (ls) {
	if (ls.b && (!ls.b.b)) {
		var first = ls.a;
		return elm$core$Maybe$Just(first);
	} else {
		return elm$core$Maybe$Nothing;
	}
};
var elm$core$Basics$apR = F2(
	function (x, f) {
		return f(x);
	});
var elm$core$Basics$le = _Utils_le;
var elm$core$Basics$sub = _Basics_sub;
var elm$core$List$drop = F2(
	function (n, list) {
		drop:
		while (true) {
			if (n <= 0) {
				return list;
			} else {
				if (!list.b) {
					return list;
				} else {
					var x = list.a;
					var xs = list.b;
					var $temp$n = n - 1,
						$temp$list = xs;
					n = $temp$n;
					list = $temp$list;
					continue drop;
				}
			}
		}
	});
var author$project$Eval$Try$tuple2 = function (ls) {
	var _n0 = _Utils_Tuple2(
		ls,
		A2(elm$core$List$drop, 1, ls));
	if ((_n0.a.b && _n0.b.b) && (!_n0.b.b.b)) {
		var _n1 = _n0.a;
		var first = _n1.a;
		var rest = _n1.b;
		var _n2 = _n0.b;
		var second = _n2.a;
		return elm$core$Maybe$Just(
			_Utils_Tuple2(first, second));
	} else {
		return elm$core$Maybe$Nothing;
	}
};
var author$project$Eval$Try$tuple3 = function (ls) {
	var _n0 = _Utils_Tuple3(
		ls,
		A2(elm$core$List$drop, 1, ls),
		A2(elm$core$List$drop, 2, ls));
	if (((_n0.a.b && _n0.b.b) && _n0.c.b) && (!_n0.c.b.b)) {
		var _n1 = _n0.a;
		var first = _n1.a;
		var slice1 = _n1.b;
		var _n2 = _n0.b;
		var second = _n2.a;
		var slice2 = _n2.b;
		var _n3 = _n0.c;
		var third = _n3.a;
		return elm$core$Maybe$Just(
			_Utils_Tuple3(first, second, third));
	} else {
		return elm$core$Maybe$Nothing;
	}
};
var elm$core$Basics$append = _Utils_append;
var elm$core$Basics$add = _Basics_add;
var elm$core$List$foldl = F3(
	function (func, acc, list) {
		foldl:
		while (true) {
			if (!list.b) {
				return acc;
			} else {
				var x = list.a;
				var xs = list.b;
				var $temp$func = func,
					$temp$acc = A2(func, x, acc),
					$temp$list = xs;
				func = $temp$func;
				acc = $temp$acc;
				list = $temp$list;
				continue foldl;
			}
		}
	});
var elm$core$List$length = function (xs) {
	return A3(
		elm$core$List$foldl,
		F2(
			function (_n0, i) {
				return i + 1;
			}),
		0,
		xs);
};
var elm$core$Result$Err = function (a) {
	return {$: 1, a: a};
};
var elm$core$Result$andThen = F2(
	function (callback, result) {
		if (!result.$) {
			var value = result.a;
			return callback(value);
		} else {
			var msg = result.a;
			return elm$core$Result$Err(msg);
		}
	});
var elm$core$Result$Ok = function (a) {
	return {$: 0, a: a};
};
var elm$core$Result$fromMaybe = F2(
	function (err, maybe) {
		if (!maybe.$) {
			var v = maybe.a;
			return elm$core$Result$Ok(v);
		} else {
			return elm$core$Result$Err(err);
		}
	});
var elm$core$String$fromInt = _String_fromNumber;
var author$project$Eval$Call$fromLib = F2(
	function (lib, call) {
		var _n0 = lib(call.e);
		if (!_n0.$) {
			var f = _n0.a;
			switch (f.$) {
				case 0:
					var f0 = f.a;
					return A2(
						elm$core$Result$andThen,
						f0,
						A2(
							elm$core$Result$fromMaybe,
							'The `' + (call.e + ('` function expects no arguments, but it got ' + (elm$core$String$fromInt(
								elm$core$List$length(call.d)) + ' instead.'))),
							author$project$Eval$Try$empty(call.d)));
				case 1:
					var f1 = f.a;
					return A2(
						elm$core$Result$andThen,
						f1,
						A2(
							elm$core$Result$fromMaybe,
							'The `' + (call.e + ('` function expects 1 argument, but it got ' + (elm$core$String$fromInt(
								elm$core$List$length(call.d)) + ' instead.'))),
							author$project$Eval$Try$singleton(call.d)));
				case 2:
					var f2 = f.a;
					return A2(
						elm$core$Result$andThen,
						f2,
						A2(
							elm$core$Result$fromMaybe,
							'The `' + (call.e + ('` function expects 2 arguments, but it got ' + (elm$core$String$fromInt(
								elm$core$List$length(call.d)) + ' instead.'))),
							author$project$Eval$Try$tuple2(call.d)));
				default:
					var f3 = f.a;
					return A2(
						elm$core$Result$andThen,
						f3,
						A2(
							elm$core$Result$fromMaybe,
							'The `' + (call.e + ('` function expects 3 arguments, but it got ' + (elm$core$String$fromInt(
								elm$core$List$length(call.d)) + ' instead.'))),
							author$project$Eval$Try$tuple3(call.d)));
			}
		} else {
			var e = _n0.a;
			return elm$core$Result$Err(e);
		}
	});
var author$project$Eval$call = author$project$Eval$Call$fromLib;
var author$project$Eval$Core$Error$notFound = F2(
	function (moduleName, fName) {
		return 'A function named `' + (fName + ('` was not found in the `' + (moduleName + '` core library.')));
	});
var author$project$Eval$Function$F0 = function (a) {
	return {$: 0, a: a};
};
var author$project$Eval$Wrap$a0 = F3(
	function (f, encoder, _null) {
		return elm$core$Result$Ok(
			encoder(
				f(_null)));
	});
var elm$core$Array$Array_elm_builtin = F4(
	function (a, b, c, d) {
		return {$: 0, a: a, b: b, c: c, d: d};
	});
var elm$core$Array$branchFactor = 32;
var elm$core$Basics$ceiling = _Basics_ceiling;
var elm$core$Basics$fdiv = _Basics_fdiv;
var elm$core$Basics$logBase = F2(
	function (base, number) {
		return _Basics_log(number) / _Basics_log(base);
	});
var elm$core$Basics$toFloat = _Basics_toFloat;
var elm$core$Array$shiftStep = elm$core$Basics$ceiling(
	A2(elm$core$Basics$logBase, 2, elm$core$Array$branchFactor));
var elm$core$Elm$JsArray$empty = _JsArray_empty;
var elm$core$Array$empty = A4(elm$core$Array$Array_elm_builtin, 0, elm$core$Array$shiftStep, elm$core$Elm$JsArray$empty, elm$core$Elm$JsArray$empty);
var elm$core$Elm$JsArray$foldl = _JsArray_foldl;
var elm$core$Array$foldl = F3(
	function (func, baseCase, _n0) {
		var tree = _n0.c;
		var tail = _n0.d;
		var helper = F2(
			function (node, acc) {
				if (!node.$) {
					var subTree = node.a;
					return A3(elm$core$Elm$JsArray$foldl, helper, acc, subTree);
				} else {
					var values = node.a;
					return A3(elm$core$Elm$JsArray$foldl, func, acc, values);
				}
			});
		return A3(
			elm$core$Elm$JsArray$foldl,
			func,
			A3(elm$core$Elm$JsArray$foldl, helper, baseCase, tree),
			tail);
	});
var elm$core$Array$Leaf = function (a) {
	return {$: 1, a: a};
};
var elm$core$Array$SubTree = function (a) {
	return {$: 0, a: a};
};
var elm$core$Elm$JsArray$initializeFromList = _JsArray_initializeFromList;
var elm$core$List$reverse = function (list) {
	return A3(elm$core$List$foldl, elm$core$List$cons, _List_Nil, list);
};
var elm$core$Array$compressNodes = F2(
	function (nodes, acc) {
		compressNodes:
		while (true) {
			var _n0 = A2(elm$core$Elm$JsArray$initializeFromList, elm$core$Array$branchFactor, nodes);
			var node = _n0.a;
			var remainingNodes = _n0.b;
			var newAcc = A2(
				elm$core$List$cons,
				elm$core$Array$SubTree(node),
				acc);
			if (!remainingNodes.b) {
				return elm$core$List$reverse(newAcc);
			} else {
				var $temp$nodes = remainingNodes,
					$temp$acc = newAcc;
				nodes = $temp$nodes;
				acc = $temp$acc;
				continue compressNodes;
			}
		}
	});
var elm$core$Basics$eq = _Utils_equal;
var elm$core$Tuple$first = function (_n0) {
	var x = _n0.a;
	return x;
};
var elm$core$Array$treeFromBuilder = F2(
	function (nodeList, nodeListSize) {
		treeFromBuilder:
		while (true) {
			var newNodeSize = elm$core$Basics$ceiling(nodeListSize / elm$core$Array$branchFactor);
			if (newNodeSize === 1) {
				return A2(elm$core$Elm$JsArray$initializeFromList, elm$core$Array$branchFactor, nodeList).a;
			} else {
				var $temp$nodeList = A2(elm$core$Array$compressNodes, nodeList, _List_Nil),
					$temp$nodeListSize = newNodeSize;
				nodeList = $temp$nodeList;
				nodeListSize = $temp$nodeListSize;
				continue treeFromBuilder;
			}
		}
	});
var elm$core$Basics$apL = F2(
	function (f, x) {
		return f(x);
	});
var elm$core$Basics$floor = _Basics_floor;
var elm$core$Basics$gt = _Utils_gt;
var elm$core$Basics$max = F2(
	function (x, y) {
		return (_Utils_cmp(x, y) > 0) ? x : y;
	});
var elm$core$Basics$mul = _Basics_mul;
var elm$core$Elm$JsArray$length = _JsArray_length;
var elm$core$Array$builderToArray = F2(
	function (reverseNodeList, builder) {
		if (!builder.a) {
			return A4(
				elm$core$Array$Array_elm_builtin,
				elm$core$Elm$JsArray$length(builder.b),
				elm$core$Array$shiftStep,
				elm$core$Elm$JsArray$empty,
				builder.b);
		} else {
			var treeLen = builder.a * elm$core$Array$branchFactor;
			var depth = elm$core$Basics$floor(
				A2(elm$core$Basics$logBase, elm$core$Array$branchFactor, treeLen - 1));
			var correctNodeList = reverseNodeList ? elm$core$List$reverse(builder.c) : builder.c;
			var tree = A2(elm$core$Array$treeFromBuilder, correctNodeList, builder.a);
			return A4(
				elm$core$Array$Array_elm_builtin,
				elm$core$Elm$JsArray$length(builder.b) + treeLen,
				A2(elm$core$Basics$max, 5, depth * elm$core$Array$shiftStep),
				tree,
				builder.b);
		}
	});
var elm$core$Basics$False = 1;
var elm$core$Basics$idiv = _Basics_idiv;
var elm$core$Basics$lt = _Utils_lt;
var elm$core$Elm$JsArray$initialize = _JsArray_initialize;
var elm$core$Array$initializeHelp = F5(
	function (fn, fromIndex, len, nodeList, tail) {
		initializeHelp:
		while (true) {
			if (fromIndex < 0) {
				return A2(
					elm$core$Array$builderToArray,
					false,
					{c: nodeList, a: (len / elm$core$Array$branchFactor) | 0, b: tail});
			} else {
				var leaf = elm$core$Array$Leaf(
					A3(elm$core$Elm$JsArray$initialize, elm$core$Array$branchFactor, fromIndex, fn));
				var $temp$fn = fn,
					$temp$fromIndex = fromIndex - elm$core$Array$branchFactor,
					$temp$len = len,
					$temp$nodeList = A2(elm$core$List$cons, leaf, nodeList),
					$temp$tail = tail;
				fn = $temp$fn;
				fromIndex = $temp$fromIndex;
				len = $temp$len;
				nodeList = $temp$nodeList;
				tail = $temp$tail;
				continue initializeHelp;
			}
		}
	});
var elm$core$Basics$remainderBy = _Basics_remainderBy;
var elm$core$Array$initialize = F2(
	function (len, fn) {
		if (len <= 0) {
			return elm$core$Array$empty;
		} else {
			var tailLen = len % elm$core$Array$branchFactor;
			var tail = A3(elm$core$Elm$JsArray$initialize, tailLen, len - tailLen, fn);
			var initialFromIndex = (len - tailLen) - elm$core$Array$branchFactor;
			return A5(elm$core$Array$initializeHelp, fn, initialFromIndex, len, _List_Nil, tail);
		}
	});
var elm$core$Basics$True = 0;
var elm$core$Result$isOk = function (result) {
	if (!result.$) {
		return true;
	} else {
		return false;
	}
};
var elm$json$Json$Decode$Failure = F2(
	function (a, b) {
		return {$: 3, a: a, b: b};
	});
var elm$json$Json$Decode$Field = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var elm$json$Json$Decode$Index = F2(
	function (a, b) {
		return {$: 1, a: a, b: b};
	});
var elm$json$Json$Decode$OneOf = function (a) {
	return {$: 2, a: a};
};
var elm$core$Basics$and = _Basics_and;
var elm$core$Basics$or = _Basics_or;
var elm$core$Char$toCode = _Char_toCode;
var elm$core$Char$isLower = function (_char) {
	var code = elm$core$Char$toCode(_char);
	return (97 <= code) && (code <= 122);
};
var elm$core$Char$isUpper = function (_char) {
	var code = elm$core$Char$toCode(_char);
	return (code <= 90) && (65 <= code);
};
var elm$core$Char$isAlpha = function (_char) {
	return elm$core$Char$isLower(_char) || elm$core$Char$isUpper(_char);
};
var elm$core$Char$isDigit = function (_char) {
	var code = elm$core$Char$toCode(_char);
	return (code <= 57) && (48 <= code);
};
var elm$core$Char$isAlphaNum = function (_char) {
	return elm$core$Char$isLower(_char) || (elm$core$Char$isUpper(_char) || elm$core$Char$isDigit(_char));
};
var elm$core$List$map2 = _List_map2;
var elm$core$List$rangeHelp = F3(
	function (lo, hi, list) {
		rangeHelp:
		while (true) {
			if (_Utils_cmp(lo, hi) < 1) {
				var $temp$lo = lo,
					$temp$hi = hi - 1,
					$temp$list = A2(elm$core$List$cons, hi, list);
				lo = $temp$lo;
				hi = $temp$hi;
				list = $temp$list;
				continue rangeHelp;
			} else {
				return list;
			}
		}
	});
var elm$core$List$range = F2(
	function (lo, hi) {
		return A3(elm$core$List$rangeHelp, lo, hi, _List_Nil);
	});
var elm$core$List$indexedMap = F2(
	function (f, xs) {
		return A3(
			elm$core$List$map2,
			f,
			A2(
				elm$core$List$range,
				0,
				elm$core$List$length(xs) - 1),
			xs);
	});
var elm$core$String$all = _String_all;
var elm$core$String$join = F2(
	function (sep, chunks) {
		return A2(
			_String_join,
			sep,
			_List_toArray(chunks));
	});
var elm$core$String$uncons = _String_uncons;
var elm$core$String$split = F2(
	function (sep, string) {
		return _List_fromArray(
			A2(_String_split, sep, string));
	});
var elm$json$Json$Decode$indent = function (str) {
	return A2(
		elm$core$String$join,
		'\n    ',
		A2(elm$core$String$split, '\n', str));
};
var elm$json$Json$Encode$encode = _Json_encode;
var elm$json$Json$Decode$errorOneOf = F2(
	function (i, error) {
		return '\n\n(' + (elm$core$String$fromInt(i + 1) + (') ' + elm$json$Json$Decode$indent(
			elm$json$Json$Decode$errorToString(error))));
	});
var elm$json$Json$Decode$errorToString = function (error) {
	return A2(elm$json$Json$Decode$errorToStringHelp, error, _List_Nil);
};
var elm$json$Json$Decode$errorToStringHelp = F2(
	function (error, context) {
		errorToStringHelp:
		while (true) {
			switch (error.$) {
				case 0:
					var f = error.a;
					var err = error.b;
					var isSimple = function () {
						var _n1 = elm$core$String$uncons(f);
						if (_n1.$ === 1) {
							return false;
						} else {
							var _n2 = _n1.a;
							var _char = _n2.a;
							var rest = _n2.b;
							return elm$core$Char$isAlpha(_char) && A2(elm$core$String$all, elm$core$Char$isAlphaNum, rest);
						}
					}();
					var fieldName = isSimple ? ('.' + f) : ('[\'' + (f + '\']'));
					var $temp$error = err,
						$temp$context = A2(elm$core$List$cons, fieldName, context);
					error = $temp$error;
					context = $temp$context;
					continue errorToStringHelp;
				case 1:
					var i = error.a;
					var err = error.b;
					var indexName = '[' + (elm$core$String$fromInt(i) + ']');
					var $temp$error = err,
						$temp$context = A2(elm$core$List$cons, indexName, context);
					error = $temp$error;
					context = $temp$context;
					continue errorToStringHelp;
				case 2:
					var errors = error.a;
					if (!errors.b) {
						return 'Ran into a Json.Decode.oneOf with no possibilities' + function () {
							if (!context.b) {
								return '!';
							} else {
								return ' at json' + A2(
									elm$core$String$join,
									'',
									elm$core$List$reverse(context));
							}
						}();
					} else {
						if (!errors.b.b) {
							var err = errors.a;
							var $temp$error = err,
								$temp$context = context;
							error = $temp$error;
							context = $temp$context;
							continue errorToStringHelp;
						} else {
							var starter = function () {
								if (!context.b) {
									return 'Json.Decode.oneOf';
								} else {
									return 'The Json.Decode.oneOf at json' + A2(
										elm$core$String$join,
										'',
										elm$core$List$reverse(context));
								}
							}();
							var introduction = starter + (' failed in the following ' + (elm$core$String$fromInt(
								elm$core$List$length(errors)) + ' ways:'));
							return A2(
								elm$core$String$join,
								'\n\n',
								A2(
									elm$core$List$cons,
									introduction,
									A2(elm$core$List$indexedMap, elm$json$Json$Decode$errorOneOf, errors)));
						}
					}
				default:
					var msg = error.a;
					var json = error.b;
					var introduction = function () {
						if (!context.b) {
							return 'Problem with the given value:\n\n';
						} else {
							return 'Problem with the value at json' + (A2(
								elm$core$String$join,
								'',
								elm$core$List$reverse(context)) + ':\n\n    ');
						}
					}();
					return introduction + (elm$json$Json$Decode$indent(
						A2(elm$json$Json$Encode$encode, 4, json)) + ('\n\n' + msg));
			}
		}
	});
var elm$json$Json$Encode$array = F2(
	function (func, entries) {
		return _Json_wrap(
			A3(
				elm$core$Array$foldl,
				_Json_addEntry(func),
				_Json_emptyArray(0),
				entries));
	});
var author$project$Eval$Core$Array$lib = function (fName) {
	if (fName === 'empty') {
		return elm$core$Result$Ok(
			author$project$Eval$Function$F0(
				A2(
					author$project$Eval$Wrap$a0,
					function (_n1) {
						return elm$core$Array$empty;
					},
					elm$json$Json$Encode$array(
						function (v) {
							return v;
						}))));
	} else {
		return elm$core$Result$Err(
			A2(author$project$Eval$Core$Error$notFound, 'Array', fName));
	}
};
var author$project$Eval$Core$Error$expected = F2(
	function (fName, typeList) {
		return 'Type error in arguments to `' + (fName + ('`: expected ' + (typeList + '.')));
	});
var author$project$Eval$Core$Error$noCompare = function (fName) {
	return 'Comparison functions like `' + (fName + ('` can\'t be called through this interface because Elm doesn\'t support ' + 'type inference on JavaScript values passed in through ports.'));
};
var author$project$Eval$Core$Error$noFunction = function (fName) {
	return 'Functions like `' + (fName + ('` that take other functions as arguments can\'t be called through this ' + ('interface because Elm only allows primitive types, arrays, and objects ' + ('to be passed in through ports. As an alternative, you could chain ' + ('`elm-eval` function calls on the JavaScript side using promise chains ' + 'or aync/await syntax.')))));
};
var author$project$Eval$Function$F1 = function (a) {
	return {$: 1, a: a};
};
var author$project$Eval$Function$F2 = function (a) {
	return {$: 2, a: a};
};
var author$project$Eval$Function$F3 = function (a) {
	return {$: 3, a: a};
};
var elm$core$Basics$composeR = F3(
	function (f, g, x) {
		return g(
			f(x));
	});
var elm$core$Result$toMaybe = function (result) {
	if (!result.$) {
		var v = result.a;
		return elm$core$Maybe$Just(v);
	} else {
		return elm$core$Maybe$Nothing;
	}
};
var elm$json$Json$Decode$bool = _Json_decodeBool;
var elm$json$Json$Decode$decodeValue = _Json_run;
var author$project$Eval$Try$bool = A2(
	elm$core$Basics$composeR,
	elm$json$Json$Decode$decodeValue(elm$json$Json$Decode$bool),
	elm$core$Result$toMaybe);
var elm$json$Json$Decode$float = _Json_decodeFloat;
var author$project$Eval$Try$float = A2(
	elm$core$Basics$composeR,
	elm$json$Json$Decode$decodeValue(elm$json$Json$Decode$float),
	elm$core$Result$toMaybe);
var elm$json$Json$Decode$int = _Json_decodeInt;
var author$project$Eval$Try$int = A2(
	elm$core$Basics$composeR,
	elm$json$Json$Decode$decodeValue(elm$json$Json$Decode$int),
	elm$core$Result$toMaybe);
var elm$core$Maybe$map = F2(
	function (f, maybe) {
		if (!maybe.$) {
			var value = maybe.a;
			return elm$core$Maybe$Just(
				f(value));
		} else {
			return elm$core$Maybe$Nothing;
		}
	});
var author$project$Eval$Wrap$a1 = F5(
	function (f, da, encoder, errorMsg, a) {
		return A2(
			elm$core$Result$fromMaybe,
			errorMsg,
			A2(
				elm$core$Maybe$map,
				encoder,
				A2(
					elm$core$Maybe$map,
					f,
					da(a))));
	});
var elm$core$Maybe$map2 = F3(
	function (func, ma, mb) {
		if (ma.$ === 1) {
			return elm$core$Maybe$Nothing;
		} else {
			var a = ma.a;
			if (mb.$ === 1) {
				return elm$core$Maybe$Nothing;
			} else {
				var b = mb.a;
				return elm$core$Maybe$Just(
					A2(func, a, b));
			}
		}
	});
var author$project$Eval$Wrap$a2 = F5(
	function (f, _n0, encoder, errorMsg, _n1) {
		var da = _n0.a;
		var db = _n0.b;
		var a = _n1.a;
		var b = _n1.b;
		return A2(
			elm$core$Result$fromMaybe,
			errorMsg,
			A2(
				elm$core$Maybe$map,
				encoder,
				A3(
					elm$core$Maybe$map2,
					f,
					da(a),
					db(b))));
	});
var elm$core$Maybe$map3 = F4(
	function (func, ma, mb, mc) {
		if (ma.$ === 1) {
			return elm$core$Maybe$Nothing;
		} else {
			var a = ma.a;
			if (mb.$ === 1) {
				return elm$core$Maybe$Nothing;
			} else {
				var b = mb.a;
				if (mc.$ === 1) {
					return elm$core$Maybe$Nothing;
				} else {
					var c = mc.a;
					return elm$core$Maybe$Just(
						A3(func, a, b, c));
				}
			}
		}
	});
var author$project$Eval$Wrap$a3 = F5(
	function (f, _n0, encoder, errorMsg, _n1) {
		var da = _n0.a;
		var db = _n0.b;
		var dc = _n0.c;
		var a = _n1.a;
		var b = _n1.b;
		var c = _n1.c;
		return A2(
			elm$core$Result$fromMaybe,
			errorMsg,
			A2(
				elm$core$Maybe$map,
				encoder,
				A4(
					elm$core$Maybe$map3,
					f,
					da(a),
					db(b),
					dc(c))));
	});
var elm$core$Basics$negate = function (n) {
	return -n;
};
var elm$core$Basics$abs = function (n) {
	return (n < 0) ? (-n) : n;
};
var elm$core$Basics$acos = _Basics_acos;
var elm$core$Basics$asin = _Basics_asin;
var elm$core$Basics$atan = _Basics_atan;
var elm$core$Basics$atan2 = _Basics_atan2;
var elm$core$Basics$clamp = F3(
	function (low, high, number) {
		return (_Utils_cmp(number, low) < 0) ? low : ((_Utils_cmp(number, high) > 0) ? high : number);
	});
var elm$core$Basics$cos = _Basics_cos;
var elm$core$Basics$pi = _Basics_pi;
var elm$core$Basics$degrees = function (angleInDegrees) {
	return (angleInDegrees * elm$core$Basics$pi) / 180;
};
var elm$core$Basics$e = _Basics_e;
var elm$core$Basics$sin = _Basics_sin;
var elm$core$Basics$fromPolar = function (_n0) {
	var radius = _n0.a;
	var theta = _n0.b;
	return _Utils_Tuple2(
		radius * elm$core$Basics$cos(theta),
		radius * elm$core$Basics$sin(theta));
};
var elm$core$Basics$isInfinite = _Basics_isInfinite;
var elm$core$Basics$isNaN = _Basics_isNaN;
var elm$core$Basics$modBy = _Basics_modBy;
var elm$core$Basics$not = _Basics_not;
var elm$core$Basics$pow = _Basics_pow;
var elm$core$Basics$radians = function (angleInRadians) {
	return angleInRadians;
};
var elm$core$Basics$round = _Basics_round;
var elm$core$Basics$sqrt = _Basics_sqrt;
var elm$core$Basics$tan = _Basics_tan;
var elm$core$Basics$toPolar = function (_n0) {
	var x = _n0.a;
	var y = _n0.b;
	return _Utils_Tuple2(
		elm$core$Basics$sqrt((x * x) + (y * y)),
		A2(elm$core$Basics$atan2, y, x));
};
var elm$core$Basics$truncate = _Basics_truncate;
var elm$core$Basics$turns = function (angleInTurns) {
	return (2 * elm$core$Basics$pi) * angleInTurns;
};
var elm$core$Basics$xor = _Basics_xor;
var elm$json$Json$Encode$bool = _Json_wrap;
var elm$json$Json$Encode$float = _Json_wrap;
var elm$json$Json$Encode$int = _Json_wrap;
var elm$json$Json$Encode$list = F2(
	function (func, entries) {
		return _Json_wrap(
			A3(
				elm$core$List$foldl,
				_Json_addEntry(func),
				_Json_emptyArray(0),
				entries));
	});
var author$project$Eval$Core$Basics$lib = function (fName) {
	switch (fName) {
		case '(+)':
			return elm$core$Result$Ok(
				author$project$Eval$Function$F2(
					A4(
						author$project$Eval$Wrap$a2,
						elm$core$Basics$add,
						_Utils_Tuple2(author$project$Eval$Try$float, author$project$Eval$Try$float),
						elm$json$Json$Encode$float,
						A2(author$project$Eval$Core$Error$expected, fName, '[number, number]'))));
		case '(-)':
			return elm$core$Result$Ok(
				author$project$Eval$Function$F2(
					A4(
						author$project$Eval$Wrap$a2,
						elm$core$Basics$sub,
						_Utils_Tuple2(author$project$Eval$Try$float, author$project$Eval$Try$float),
						elm$json$Json$Encode$float,
						A2(author$project$Eval$Core$Error$expected, fName, '[number, number]'))));
		case '(*)':
			return elm$core$Result$Ok(
				author$project$Eval$Function$F2(
					A4(
						author$project$Eval$Wrap$a2,
						elm$core$Basics$mul,
						_Utils_Tuple2(author$project$Eval$Try$float, author$project$Eval$Try$float),
						elm$json$Json$Encode$float,
						A2(author$project$Eval$Core$Error$expected, fName, '[number, number]'))));
		case '(/)':
			return elm$core$Result$Ok(
				author$project$Eval$Function$F2(
					A4(
						author$project$Eval$Wrap$a2,
						elm$core$Basics$fdiv,
						_Utils_Tuple2(author$project$Eval$Try$float, author$project$Eval$Try$float),
						elm$json$Json$Encode$float,
						A2(author$project$Eval$Core$Error$expected, fName, '[number, number]'))));
		case '(//)':
			return elm$core$Result$Ok(
				author$project$Eval$Function$F2(
					A4(
						author$project$Eval$Wrap$a2,
						elm$core$Basics$idiv,
						_Utils_Tuple2(author$project$Eval$Try$int, author$project$Eval$Try$int),
						elm$json$Json$Encode$int,
						A2(author$project$Eval$Core$Error$expected, fName, '[integer, integer]'))));
		case '(^)':
			return elm$core$Result$Ok(
				author$project$Eval$Function$F2(
					A4(
						author$project$Eval$Wrap$a2,
						elm$core$Basics$pow,
						_Utils_Tuple2(author$project$Eval$Try$float, author$project$Eval$Try$float),
						elm$json$Json$Encode$float,
						A2(author$project$Eval$Core$Error$expected, fName, '[number, number]'))));
		case 'round':
			return elm$core$Result$Ok(
				author$project$Eval$Function$F1(
					A4(
						author$project$Eval$Wrap$a1,
						elm$core$Basics$round,
						author$project$Eval$Try$float,
						elm$json$Json$Encode$int,
						A2(author$project$Eval$Core$Error$expected, fName, '[number]'))));
		case 'floor':
			return elm$core$Result$Ok(
				author$project$Eval$Function$F1(
					A4(
						author$project$Eval$Wrap$a1,
						elm$core$Basics$floor,
						author$project$Eval$Try$float,
						elm$json$Json$Encode$int,
						A2(author$project$Eval$Core$Error$expected, fName, '[number]'))));
		case 'ceiling':
			return elm$core$Result$Ok(
				author$project$Eval$Function$F1(
					A4(
						author$project$Eval$Wrap$a1,
						elm$core$Basics$ceiling,
						author$project$Eval$Try$float,
						elm$json$Json$Encode$int,
						A2(author$project$Eval$Core$Error$expected, fName, '[number]'))));
		case 'truncate':
			return elm$core$Result$Ok(
				author$project$Eval$Function$F1(
					A4(
						author$project$Eval$Wrap$a1,
						elm$core$Basics$truncate,
						author$project$Eval$Try$float,
						elm$json$Json$Encode$int,
						A2(author$project$Eval$Core$Error$expected, fName, '[number]'))));
		case '(==)':
			return elm$core$Result$Err(
				author$project$Eval$Core$Error$noCompare(fName));
		case '(/=)':
			return elm$core$Result$Err(
				author$project$Eval$Core$Error$noCompare(fName));
		case '(<)':
			return elm$core$Result$Err(
				author$project$Eval$Core$Error$noCompare(fName));
		case '(>)':
			return elm$core$Result$Err(
				author$project$Eval$Core$Error$noCompare(fName));
		case '(<=)':
			return elm$core$Result$Err(
				author$project$Eval$Core$Error$noCompare(fName));
		case '(>=)':
			return elm$core$Result$Err(
				author$project$Eval$Core$Error$noCompare(fName));
		case 'max':
			return elm$core$Result$Err(
				author$project$Eval$Core$Error$noCompare(fName));
		case 'min':
			return elm$core$Result$Err(
				author$project$Eval$Core$Error$noCompare(fName));
		case 'compare':
			return elm$core$Result$Err(
				author$project$Eval$Core$Error$noCompare(fName));
		case 'not':
			return elm$core$Result$Ok(
				author$project$Eval$Function$F1(
					A4(
						author$project$Eval$Wrap$a1,
						elm$core$Basics$not,
						author$project$Eval$Try$bool,
						elm$json$Json$Encode$bool,
						A2(author$project$Eval$Core$Error$expected, fName, '[boolean]'))));
		case '(&&)':
			return elm$core$Result$Ok(
				author$project$Eval$Function$F2(
					A4(
						author$project$Eval$Wrap$a2,
						elm$core$Basics$and,
						_Utils_Tuple2(author$project$Eval$Try$bool, author$project$Eval$Try$bool),
						elm$json$Json$Encode$bool,
						A2(author$project$Eval$Core$Error$expected, fName, '[boolean, boolean]'))));
		case '(||)':
			return elm$core$Result$Ok(
				author$project$Eval$Function$F2(
					A4(
						author$project$Eval$Wrap$a2,
						elm$core$Basics$or,
						_Utils_Tuple2(author$project$Eval$Try$bool, author$project$Eval$Try$bool),
						elm$json$Json$Encode$bool,
						A2(author$project$Eval$Core$Error$expected, fName, '[boolean, boolean]'))));
		case 'xor':
			return elm$core$Result$Ok(
				author$project$Eval$Function$F2(
					A4(
						author$project$Eval$Wrap$a2,
						elm$core$Basics$xor,
						_Utils_Tuple2(author$project$Eval$Try$bool, author$project$Eval$Try$bool),
						elm$json$Json$Encode$bool,
						A2(author$project$Eval$Core$Error$expected, fName, '[boolean, boolean]'))));
		case '(++)':
			return elm$core$Result$Err('The `(++)` function can\'t be called throught this interface because ' + ('Elm doesn\'t support type inference on JavaScript values passed in ' + 'through ports. Use `String.append` or `List.append` instead.'));
		case 'modBy':
			return elm$core$Result$Ok(
				author$project$Eval$Function$F2(
					A4(
						author$project$Eval$Wrap$a2,
						elm$core$Basics$modBy,
						_Utils_Tuple2(author$project$Eval$Try$int, author$project$Eval$Try$int),
						elm$json$Json$Encode$int,
						A2(author$project$Eval$Core$Error$expected, fName, '[integer, integer]'))));
		case 'remainderBy':
			return elm$core$Result$Ok(
				author$project$Eval$Function$F2(
					A4(
						author$project$Eval$Wrap$a2,
						elm$core$Basics$remainderBy,
						_Utils_Tuple2(author$project$Eval$Try$int, author$project$Eval$Try$int),
						elm$json$Json$Encode$int,
						A2(author$project$Eval$Core$Error$expected, fName, '[integer, integer]'))));
		case 'negate':
			return elm$core$Result$Ok(
				author$project$Eval$Function$F1(
					A4(
						author$project$Eval$Wrap$a1,
						elm$core$Basics$negate,
						author$project$Eval$Try$float,
						elm$json$Json$Encode$float,
						A2(author$project$Eval$Core$Error$expected, fName, '[number]'))));
		case 'abs':
			return elm$core$Result$Ok(
				author$project$Eval$Function$F1(
					A4(
						author$project$Eval$Wrap$a1,
						elm$core$Basics$abs,
						author$project$Eval$Try$float,
						elm$json$Json$Encode$float,
						A2(author$project$Eval$Core$Error$expected, fName, '[number]'))));
		case 'clamp':
			return elm$core$Result$Ok(
				author$project$Eval$Function$F3(
					A4(
						author$project$Eval$Wrap$a3,
						elm$core$Basics$clamp,
						_Utils_Tuple3(author$project$Eval$Try$float, author$project$Eval$Try$float, author$project$Eval$Try$float),
						elm$json$Json$Encode$float,
						A2(author$project$Eval$Core$Error$expected, fName, '[number, number, number]'))));
		case 'sqrt':
			return elm$core$Result$Ok(
				author$project$Eval$Function$F1(
					A4(
						author$project$Eval$Wrap$a1,
						elm$core$Basics$sqrt,
						author$project$Eval$Try$float,
						elm$json$Json$Encode$float,
						A2(author$project$Eval$Core$Error$expected, fName, '[number]'))));
		case 'logBase':
			return elm$core$Result$Ok(
				author$project$Eval$Function$F2(
					A4(
						author$project$Eval$Wrap$a2,
						elm$core$Basics$logBase,
						_Utils_Tuple2(author$project$Eval$Try$float, author$project$Eval$Try$float),
						elm$json$Json$Encode$float,
						A2(author$project$Eval$Core$Error$expected, fName, '[number, number]'))));
		case 'e':
			return elm$core$Result$Ok(
				author$project$Eval$Function$F0(
					A2(
						author$project$Eval$Wrap$a0,
						function (_n1) {
							return elm$core$Basics$e;
						},
						elm$json$Json$Encode$float)));
		case 'degrees':
			return elm$core$Result$Ok(
				author$project$Eval$Function$F1(
					A4(
						author$project$Eval$Wrap$a1,
						elm$core$Basics$degrees,
						author$project$Eval$Try$float,
						elm$json$Json$Encode$float,
						A2(author$project$Eval$Core$Error$expected, fName, '[number]'))));
		case 'radians':
			return elm$core$Result$Ok(
				author$project$Eval$Function$F1(
					A4(
						author$project$Eval$Wrap$a1,
						elm$core$Basics$radians,
						author$project$Eval$Try$float,
						elm$json$Json$Encode$float,
						A2(author$project$Eval$Core$Error$expected, fName, '[number]'))));
		case 'turns':
			return elm$core$Result$Ok(
				author$project$Eval$Function$F1(
					A4(
						author$project$Eval$Wrap$a1,
						elm$core$Basics$turns,
						author$project$Eval$Try$float,
						elm$json$Json$Encode$float,
						A2(author$project$Eval$Core$Error$expected, fName, '[number]'))));
		case 'pi':
			return elm$core$Result$Ok(
				author$project$Eval$Function$F0(
					A2(
						author$project$Eval$Wrap$a0,
						function (_n2) {
							return elm$core$Basics$pi;
						},
						elm$json$Json$Encode$float)));
		case 'cos':
			return elm$core$Result$Ok(
				author$project$Eval$Function$F1(
					A4(
						author$project$Eval$Wrap$a1,
						elm$core$Basics$cos,
						author$project$Eval$Try$float,
						elm$json$Json$Encode$float,
						A2(author$project$Eval$Core$Error$expected, fName, '[number]'))));
		case 'sin':
			return elm$core$Result$Ok(
				author$project$Eval$Function$F1(
					A4(
						author$project$Eval$Wrap$a1,
						elm$core$Basics$sin,
						author$project$Eval$Try$float,
						elm$json$Json$Encode$float,
						A2(author$project$Eval$Core$Error$expected, fName, '[number]'))));
		case 'tan':
			return elm$core$Result$Ok(
				author$project$Eval$Function$F1(
					A4(
						author$project$Eval$Wrap$a1,
						elm$core$Basics$tan,
						author$project$Eval$Try$float,
						elm$json$Json$Encode$float,
						A2(author$project$Eval$Core$Error$expected, fName, '[number]'))));
		case 'acos':
			return elm$core$Result$Ok(
				author$project$Eval$Function$F1(
					A4(
						author$project$Eval$Wrap$a1,
						elm$core$Basics$acos,
						author$project$Eval$Try$float,
						elm$json$Json$Encode$float,
						A2(author$project$Eval$Core$Error$expected, fName, '[number]'))));
		case 'asin':
			return elm$core$Result$Ok(
				author$project$Eval$Function$F1(
					A4(
						author$project$Eval$Wrap$a1,
						elm$core$Basics$asin,
						author$project$Eval$Try$float,
						elm$json$Json$Encode$float,
						A2(author$project$Eval$Core$Error$expected, fName, '[number]'))));
		case 'atan':
			return elm$core$Result$Ok(
				author$project$Eval$Function$F1(
					A4(
						author$project$Eval$Wrap$a1,
						elm$core$Basics$atan,
						author$project$Eval$Try$float,
						elm$json$Json$Encode$float,
						A2(author$project$Eval$Core$Error$expected, fName, '[number]'))));
		case 'atan2':
			return elm$core$Result$Ok(
				author$project$Eval$Function$F2(
					A4(
						author$project$Eval$Wrap$a2,
						elm$core$Basics$atan2,
						_Utils_Tuple2(author$project$Eval$Try$float, author$project$Eval$Try$float),
						elm$json$Json$Encode$float,
						A2(author$project$Eval$Core$Error$expected, fName, '[number]'))));
		case 'toPolar':
			return elm$core$Result$Ok(
				author$project$Eval$Function$F2(
					A4(
						author$project$Eval$Wrap$a2,
						F2(
							function (a, b) {
								return elm$core$Basics$toPolar(
									_Utils_Tuple2(a, b));
							}),
						_Utils_Tuple2(author$project$Eval$Try$float, author$project$Eval$Try$float),
						function (_n3) {
							var a = _n3.a;
							var b = _n3.b;
							return A2(
								elm$json$Json$Encode$list,
								elm$json$Json$Encode$float,
								_List_fromArray(
									[a, b]));
						},
						A2(author$project$Eval$Core$Error$expected, fName, '[number, number]'))));
		case 'fromPolar':
			return elm$core$Result$Ok(
				author$project$Eval$Function$F2(
					A4(
						author$project$Eval$Wrap$a2,
						F2(
							function (a, b) {
								return elm$core$Basics$fromPolar(
									_Utils_Tuple2(a, b));
							}),
						_Utils_Tuple2(author$project$Eval$Try$float, author$project$Eval$Try$float),
						function (_n4) {
							var a = _n4.a;
							var b = _n4.b;
							return A2(
								elm$json$Json$Encode$list,
								elm$json$Json$Encode$float,
								_List_fromArray(
									[a, b]));
						},
						A2(author$project$Eval$Core$Error$expected, fName, '[number, number]'))));
		case 'isNaN':
			return elm$core$Result$Ok(
				author$project$Eval$Function$F1(
					A4(
						author$project$Eval$Wrap$a1,
						elm$core$Basics$isNaN,
						author$project$Eval$Try$float,
						elm$json$Json$Encode$bool,
						A2(author$project$Eval$Core$Error$expected, fName, '[number]'))));
		case 'isInfinite':
			return elm$core$Result$Ok(
				author$project$Eval$Function$F1(
					A4(
						author$project$Eval$Wrap$a1,
						elm$core$Basics$isInfinite,
						author$project$Eval$Try$float,
						elm$json$Json$Encode$bool,
						A2(author$project$Eval$Core$Error$expected, fName, '[number]'))));
		case 'identity':
			return elm$core$Result$Ok(
				author$project$Eval$Function$F1(
					function (a) {
						return elm$core$Result$Ok(a);
					}));
		case 'always':
			return elm$core$Result$Ok(
				author$project$Eval$Function$F2(
					function (_n5) {
						var a = _n5.a;
						return elm$core$Result$Ok(a);
					}));
		case '(<|)':
			return elm$core$Result$Err(
				author$project$Eval$Core$Error$noFunction(fName));
		case '(|>)':
			return elm$core$Result$Err(
				author$project$Eval$Core$Error$noFunction(fName));
		case '(<<)':
			return elm$core$Result$Err(
				author$project$Eval$Core$Error$noFunction(fName));
		case '(>>)':
			return elm$core$Result$Err(
				author$project$Eval$Core$Error$noFunction(fName));
		default:
			return elm$core$Result$Err(
				A2(author$project$Eval$Core$Error$notFound, 'Basics', fName) + (' If you are trying to access a function in another core library, ' + 'the module name must be given first (example: `String.length`).'));
	}
};
var elm$core$Dict$RBEmpty_elm_builtin = {$: -2};
var elm$core$Dict$empty = elm$core$Dict$RBEmpty_elm_builtin;
var elm$core$Dict$Black = 1;
var elm$core$Dict$RBNode_elm_builtin = F5(
	function (a, b, c, d, e) {
		return {$: -1, a: a, b: b, c: c, d: d, e: e};
	});
var elm$core$Basics$compare = _Utils_compare;
var elm$core$Dict$Red = 0;
var elm$core$Dict$balance = F5(
	function (color, key, value, left, right) {
		if ((right.$ === -1) && (!right.a)) {
			var _n1 = right.a;
			var rK = right.b;
			var rV = right.c;
			var rLeft = right.d;
			var rRight = right.e;
			if ((left.$ === -1) && (!left.a)) {
				var _n3 = left.a;
				var lK = left.b;
				var lV = left.c;
				var lLeft = left.d;
				var lRight = left.e;
				return A5(
					elm$core$Dict$RBNode_elm_builtin,
					0,
					key,
					value,
					A5(elm$core$Dict$RBNode_elm_builtin, 1, lK, lV, lLeft, lRight),
					A5(elm$core$Dict$RBNode_elm_builtin, 1, rK, rV, rLeft, rRight));
			} else {
				return A5(
					elm$core$Dict$RBNode_elm_builtin,
					color,
					rK,
					rV,
					A5(elm$core$Dict$RBNode_elm_builtin, 0, key, value, left, rLeft),
					rRight);
			}
		} else {
			if ((((left.$ === -1) && (!left.a)) && (left.d.$ === -1)) && (!left.d.a)) {
				var _n5 = left.a;
				var lK = left.b;
				var lV = left.c;
				var _n6 = left.d;
				var _n7 = _n6.a;
				var llK = _n6.b;
				var llV = _n6.c;
				var llLeft = _n6.d;
				var llRight = _n6.e;
				var lRight = left.e;
				return A5(
					elm$core$Dict$RBNode_elm_builtin,
					0,
					lK,
					lV,
					A5(elm$core$Dict$RBNode_elm_builtin, 1, llK, llV, llLeft, llRight),
					A5(elm$core$Dict$RBNode_elm_builtin, 1, key, value, lRight, right));
			} else {
				return A5(elm$core$Dict$RBNode_elm_builtin, color, key, value, left, right);
			}
		}
	});
var elm$core$Dict$insertHelp = F3(
	function (key, value, dict) {
		if (dict.$ === -2) {
			return A5(elm$core$Dict$RBNode_elm_builtin, 0, key, value, elm$core$Dict$RBEmpty_elm_builtin, elm$core$Dict$RBEmpty_elm_builtin);
		} else {
			var nColor = dict.a;
			var nKey = dict.b;
			var nValue = dict.c;
			var nLeft = dict.d;
			var nRight = dict.e;
			var _n1 = A2(elm$core$Basics$compare, key, nKey);
			switch (_n1) {
				case 0:
					return A5(
						elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						A3(elm$core$Dict$insertHelp, key, value, nLeft),
						nRight);
				case 1:
					return A5(elm$core$Dict$RBNode_elm_builtin, nColor, nKey, value, nLeft, nRight);
				default:
					return A5(
						elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						nLeft,
						A3(elm$core$Dict$insertHelp, key, value, nRight));
			}
		}
	});
var elm$core$Dict$insert = F3(
	function (key, value, dict) {
		var _n0 = A3(elm$core$Dict$insertHelp, key, value, dict);
		if ((_n0.$ === -1) && (!_n0.a)) {
			var _n1 = _n0.a;
			var k = _n0.b;
			var v = _n0.c;
			var l = _n0.d;
			var r = _n0.e;
			return A5(elm$core$Dict$RBNode_elm_builtin, 1, k, v, l, r);
		} else {
			var x = _n0;
			return x;
		}
	});
var elm$core$Dict$fromList = function (assocs) {
	return A3(
		elm$core$List$foldl,
		F2(
			function (_n0, dict) {
				var key = _n0.a;
				var value = _n0.b;
				return A3(elm$core$Dict$insert, key, value, dict);
			}),
		elm$core$Dict$empty,
		assocs);
};
var elm$json$Json$Decode$keyValuePairs = _Json_decodeKeyValuePairs;
var elm$json$Json$Decode$map = _Json_map1;
var elm$json$Json$Decode$dict = function (decoder) {
	return A2(
		elm$json$Json$Decode$map,
		elm$core$Dict$fromList,
		elm$json$Json$Decode$keyValuePairs(decoder));
};
var elm$json$Json$Decode$value = _Json_decodeValue;
var author$project$Eval$Try$dict = A2(
	elm$core$Basics$composeR,
	elm$json$Json$Decode$decodeValue(
		elm$json$Json$Decode$dict(elm$json$Json$Decode$value)),
	elm$core$Result$toMaybe);
var elm$core$Dict$foldl = F3(
	function (func, acc, dict) {
		foldl:
		while (true) {
			if (dict.$ === -2) {
				return acc;
			} else {
				var key = dict.b;
				var value = dict.c;
				var left = dict.d;
				var right = dict.e;
				var $temp$func = func,
					$temp$acc = A3(
					func,
					key,
					value,
					A3(elm$core$Dict$foldl, func, acc, left)),
					$temp$dict = right;
				func = $temp$func;
				acc = $temp$acc;
				dict = $temp$dict;
				continue foldl;
			}
		}
	});
var elm$core$Dict$getMin = function (dict) {
	getMin:
	while (true) {
		if ((dict.$ === -1) && (dict.d.$ === -1)) {
			var left = dict.d;
			var $temp$dict = left;
			dict = $temp$dict;
			continue getMin;
		} else {
			return dict;
		}
	}
};
var elm$core$Dict$moveRedLeft = function (dict) {
	if (((dict.$ === -1) && (dict.d.$ === -1)) && (dict.e.$ === -1)) {
		if ((dict.e.d.$ === -1) && (!dict.e.d.a)) {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _n1 = dict.d;
			var lClr = _n1.a;
			var lK = _n1.b;
			var lV = _n1.c;
			var lLeft = _n1.d;
			var lRight = _n1.e;
			var _n2 = dict.e;
			var rClr = _n2.a;
			var rK = _n2.b;
			var rV = _n2.c;
			var rLeft = _n2.d;
			var _n3 = rLeft.a;
			var rlK = rLeft.b;
			var rlV = rLeft.c;
			var rlL = rLeft.d;
			var rlR = rLeft.e;
			var rRight = _n2.e;
			return A5(
				elm$core$Dict$RBNode_elm_builtin,
				0,
				rlK,
				rlV,
				A5(
					elm$core$Dict$RBNode_elm_builtin,
					1,
					k,
					v,
					A5(elm$core$Dict$RBNode_elm_builtin, 0, lK, lV, lLeft, lRight),
					rlL),
				A5(elm$core$Dict$RBNode_elm_builtin, 1, rK, rV, rlR, rRight));
		} else {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _n4 = dict.d;
			var lClr = _n4.a;
			var lK = _n4.b;
			var lV = _n4.c;
			var lLeft = _n4.d;
			var lRight = _n4.e;
			var _n5 = dict.e;
			var rClr = _n5.a;
			var rK = _n5.b;
			var rV = _n5.c;
			var rLeft = _n5.d;
			var rRight = _n5.e;
			if (clr === 1) {
				return A5(
					elm$core$Dict$RBNode_elm_builtin,
					1,
					k,
					v,
					A5(elm$core$Dict$RBNode_elm_builtin, 0, lK, lV, lLeft, lRight),
					A5(elm$core$Dict$RBNode_elm_builtin, 0, rK, rV, rLeft, rRight));
			} else {
				return A5(
					elm$core$Dict$RBNode_elm_builtin,
					1,
					k,
					v,
					A5(elm$core$Dict$RBNode_elm_builtin, 0, lK, lV, lLeft, lRight),
					A5(elm$core$Dict$RBNode_elm_builtin, 0, rK, rV, rLeft, rRight));
			}
		}
	} else {
		return dict;
	}
};
var elm$core$Dict$moveRedRight = function (dict) {
	if (((dict.$ === -1) && (dict.d.$ === -1)) && (dict.e.$ === -1)) {
		if ((dict.d.d.$ === -1) && (!dict.d.d.a)) {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _n1 = dict.d;
			var lClr = _n1.a;
			var lK = _n1.b;
			var lV = _n1.c;
			var _n2 = _n1.d;
			var _n3 = _n2.a;
			var llK = _n2.b;
			var llV = _n2.c;
			var llLeft = _n2.d;
			var llRight = _n2.e;
			var lRight = _n1.e;
			var _n4 = dict.e;
			var rClr = _n4.a;
			var rK = _n4.b;
			var rV = _n4.c;
			var rLeft = _n4.d;
			var rRight = _n4.e;
			return A5(
				elm$core$Dict$RBNode_elm_builtin,
				0,
				lK,
				lV,
				A5(elm$core$Dict$RBNode_elm_builtin, 1, llK, llV, llLeft, llRight),
				A5(
					elm$core$Dict$RBNode_elm_builtin,
					1,
					k,
					v,
					lRight,
					A5(elm$core$Dict$RBNode_elm_builtin, 0, rK, rV, rLeft, rRight)));
		} else {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _n5 = dict.d;
			var lClr = _n5.a;
			var lK = _n5.b;
			var lV = _n5.c;
			var lLeft = _n5.d;
			var lRight = _n5.e;
			var _n6 = dict.e;
			var rClr = _n6.a;
			var rK = _n6.b;
			var rV = _n6.c;
			var rLeft = _n6.d;
			var rRight = _n6.e;
			if (clr === 1) {
				return A5(
					elm$core$Dict$RBNode_elm_builtin,
					1,
					k,
					v,
					A5(elm$core$Dict$RBNode_elm_builtin, 0, lK, lV, lLeft, lRight),
					A5(elm$core$Dict$RBNode_elm_builtin, 0, rK, rV, rLeft, rRight));
			} else {
				return A5(
					elm$core$Dict$RBNode_elm_builtin,
					1,
					k,
					v,
					A5(elm$core$Dict$RBNode_elm_builtin, 0, lK, lV, lLeft, lRight),
					A5(elm$core$Dict$RBNode_elm_builtin, 0, rK, rV, rLeft, rRight));
			}
		}
	} else {
		return dict;
	}
};
var elm$core$Dict$removeHelpPrepEQGT = F7(
	function (targetKey, dict, color, key, value, left, right) {
		if ((left.$ === -1) && (!left.a)) {
			var _n1 = left.a;
			var lK = left.b;
			var lV = left.c;
			var lLeft = left.d;
			var lRight = left.e;
			return A5(
				elm$core$Dict$RBNode_elm_builtin,
				color,
				lK,
				lV,
				lLeft,
				A5(elm$core$Dict$RBNode_elm_builtin, 0, key, value, lRight, right));
		} else {
			_n2$2:
			while (true) {
				if ((right.$ === -1) && (right.a === 1)) {
					if (right.d.$ === -1) {
						if (right.d.a === 1) {
							var _n3 = right.a;
							var _n4 = right.d;
							var _n5 = _n4.a;
							return elm$core$Dict$moveRedRight(dict);
						} else {
							break _n2$2;
						}
					} else {
						var _n6 = right.a;
						var _n7 = right.d;
						return elm$core$Dict$moveRedRight(dict);
					}
				} else {
					break _n2$2;
				}
			}
			return dict;
		}
	});
var elm$core$Dict$removeMin = function (dict) {
	if ((dict.$ === -1) && (dict.d.$ === -1)) {
		var color = dict.a;
		var key = dict.b;
		var value = dict.c;
		var left = dict.d;
		var lColor = left.a;
		var lLeft = left.d;
		var right = dict.e;
		if (lColor === 1) {
			if ((lLeft.$ === -1) && (!lLeft.a)) {
				var _n3 = lLeft.a;
				return A5(
					elm$core$Dict$RBNode_elm_builtin,
					color,
					key,
					value,
					elm$core$Dict$removeMin(left),
					right);
			} else {
				var _n4 = elm$core$Dict$moveRedLeft(dict);
				if (_n4.$ === -1) {
					var nColor = _n4.a;
					var nKey = _n4.b;
					var nValue = _n4.c;
					var nLeft = _n4.d;
					var nRight = _n4.e;
					return A5(
						elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						elm$core$Dict$removeMin(nLeft),
						nRight);
				} else {
					return elm$core$Dict$RBEmpty_elm_builtin;
				}
			}
		} else {
			return A5(
				elm$core$Dict$RBNode_elm_builtin,
				color,
				key,
				value,
				elm$core$Dict$removeMin(left),
				right);
		}
	} else {
		return elm$core$Dict$RBEmpty_elm_builtin;
	}
};
var elm$core$Dict$removeHelp = F2(
	function (targetKey, dict) {
		if (dict.$ === -2) {
			return elm$core$Dict$RBEmpty_elm_builtin;
		} else {
			var color = dict.a;
			var key = dict.b;
			var value = dict.c;
			var left = dict.d;
			var right = dict.e;
			if (_Utils_cmp(targetKey, key) < 0) {
				if ((left.$ === -1) && (left.a === 1)) {
					var _n4 = left.a;
					var lLeft = left.d;
					if ((lLeft.$ === -1) && (!lLeft.a)) {
						var _n6 = lLeft.a;
						return A5(
							elm$core$Dict$RBNode_elm_builtin,
							color,
							key,
							value,
							A2(elm$core$Dict$removeHelp, targetKey, left),
							right);
					} else {
						var _n7 = elm$core$Dict$moveRedLeft(dict);
						if (_n7.$ === -1) {
							var nColor = _n7.a;
							var nKey = _n7.b;
							var nValue = _n7.c;
							var nLeft = _n7.d;
							var nRight = _n7.e;
							return A5(
								elm$core$Dict$balance,
								nColor,
								nKey,
								nValue,
								A2(elm$core$Dict$removeHelp, targetKey, nLeft),
								nRight);
						} else {
							return elm$core$Dict$RBEmpty_elm_builtin;
						}
					}
				} else {
					return A5(
						elm$core$Dict$RBNode_elm_builtin,
						color,
						key,
						value,
						A2(elm$core$Dict$removeHelp, targetKey, left),
						right);
				}
			} else {
				return A2(
					elm$core$Dict$removeHelpEQGT,
					targetKey,
					A7(elm$core$Dict$removeHelpPrepEQGT, targetKey, dict, color, key, value, left, right));
			}
		}
	});
var elm$core$Dict$removeHelpEQGT = F2(
	function (targetKey, dict) {
		if (dict.$ === -1) {
			var color = dict.a;
			var key = dict.b;
			var value = dict.c;
			var left = dict.d;
			var right = dict.e;
			if (_Utils_eq(targetKey, key)) {
				var _n1 = elm$core$Dict$getMin(right);
				if (_n1.$ === -1) {
					var minKey = _n1.b;
					var minValue = _n1.c;
					return A5(
						elm$core$Dict$balance,
						color,
						minKey,
						minValue,
						left,
						elm$core$Dict$removeMin(right));
				} else {
					return elm$core$Dict$RBEmpty_elm_builtin;
				}
			} else {
				return A5(
					elm$core$Dict$balance,
					color,
					key,
					value,
					left,
					A2(elm$core$Dict$removeHelp, targetKey, right));
			}
		} else {
			return elm$core$Dict$RBEmpty_elm_builtin;
		}
	});
var elm$core$Dict$remove = F2(
	function (key, dict) {
		var _n0 = A2(elm$core$Dict$removeHelp, key, dict);
		if ((_n0.$ === -1) && (!_n0.a)) {
			var _n1 = _n0.a;
			var k = _n0.b;
			var v = _n0.c;
			var l = _n0.d;
			var r = _n0.e;
			return A5(elm$core$Dict$RBNode_elm_builtin, 1, k, v, l, r);
		} else {
			var x = _n0;
			return x;
		}
	});
var elm$core$Dict$diff = F2(
	function (t1, t2) {
		return A3(
			elm$core$Dict$foldl,
			F3(
				function (k, v, t) {
					return A2(elm$core$Dict$remove, k, t);
				}),
			t1,
			t2);
	});
var elm$core$Dict$filter = F2(
	function (isGood, dict) {
		return A3(
			elm$core$Dict$foldl,
			F3(
				function (k, v, d) {
					return A2(isGood, k, v) ? A3(elm$core$Dict$insert, k, v, d) : d;
				}),
			elm$core$Dict$empty,
			dict);
	});
var elm$core$Dict$get = F2(
	function (targetKey, dict) {
		get:
		while (true) {
			if (dict.$ === -2) {
				return elm$core$Maybe$Nothing;
			} else {
				var key = dict.b;
				var value = dict.c;
				var left = dict.d;
				var right = dict.e;
				var _n1 = A2(elm$core$Basics$compare, targetKey, key);
				switch (_n1) {
					case 0:
						var $temp$targetKey = targetKey,
							$temp$dict = left;
						targetKey = $temp$targetKey;
						dict = $temp$dict;
						continue get;
					case 1:
						return elm$core$Maybe$Just(value);
					default:
						var $temp$targetKey = targetKey,
							$temp$dict = right;
						targetKey = $temp$targetKey;
						dict = $temp$dict;
						continue get;
				}
			}
		}
	});
var elm$core$Dict$member = F2(
	function (key, dict) {
		var _n0 = A2(elm$core$Dict$get, key, dict);
		if (!_n0.$) {
			return true;
		} else {
			return false;
		}
	});
var elm$core$Dict$intersect = F2(
	function (t1, t2) {
		return A2(
			elm$core$Dict$filter,
			F2(
				function (k, _n0) {
					return A2(elm$core$Dict$member, k, t2);
				}),
			t1);
	});
var elm$core$Dict$union = F2(
	function (t1, t2) {
		return A3(elm$core$Dict$foldl, elm$core$Dict$insert, t2, t1);
	});
var elm$json$Json$Encode$object = function (pairs) {
	return _Json_wrap(
		A3(
			elm$core$List$foldl,
			F2(
				function (_n0, obj) {
					var k = _n0.a;
					var v = _n0.b;
					return A3(_Json_addField, k, v, obj);
				}),
			_Json_emptyObject(0),
			pairs));
};
var author$project$Eval$Core$Dict$lib = function (fName) {
	switch (fName) {
		case 'union':
			return elm$core$Result$Ok(
				author$project$Eval$Function$F2(
					A4(
						author$project$Eval$Wrap$a2,
						elm$core$Dict$union,
						_Utils_Tuple2(author$project$Eval$Try$dict, author$project$Eval$Try$dict),
						A2(elm$core$Basics$composeR, elm$core$Dict$toList, elm$json$Json$Encode$object),
						A2(author$project$Eval$Core$Error$expected, fName, '[object, object]'))));
		case 'intersect':
			return elm$core$Result$Ok(
				author$project$Eval$Function$F2(
					A4(
						author$project$Eval$Wrap$a2,
						elm$core$Dict$intersect,
						_Utils_Tuple2(author$project$Eval$Try$dict, author$project$Eval$Try$dict),
						A2(elm$core$Basics$composeR, elm$core$Dict$toList, elm$json$Json$Encode$object),
						A2(author$project$Eval$Core$Error$expected, fName, '[object, object]'))));
		case 'diff':
			return elm$core$Result$Ok(
				author$project$Eval$Function$F2(
					A4(
						author$project$Eval$Wrap$a2,
						elm$core$Dict$diff,
						_Utils_Tuple2(author$project$Eval$Try$dict, author$project$Eval$Try$dict),
						A2(elm$core$Basics$composeR, elm$core$Dict$toList, elm$json$Json$Encode$object),
						A2(author$project$Eval$Core$Error$expected, fName, '[object, object]'))));
		default:
			return elm$core$Result$Err(
				A2(author$project$Eval$Core$Error$notFound, 'Dict', fName));
	}
};
var elm$json$Json$Decode$list = _Json_decodeList;
var author$project$Eval$Try$list = A2(
	elm$core$Basics$composeR,
	elm$json$Json$Decode$decodeValue(
		elm$json$Json$Decode$list(elm$json$Json$Decode$value)),
	elm$core$Result$toMaybe);
var author$project$Eval$Try$listFloat = A2(
	elm$core$Basics$composeR,
	elm$json$Json$Decode$decodeValue(
		elm$json$Json$Decode$list(elm$json$Json$Decode$float)),
	elm$core$Result$toMaybe);
var author$project$Eval$Try$listList = A2(
	elm$core$Basics$composeR,
	elm$json$Json$Decode$decodeValue(
		elm$json$Json$Decode$list(
			elm$json$Json$Decode$list(elm$json$Json$Decode$value))),
	elm$core$Result$toMaybe);
var elm$core$List$foldrHelper = F4(
	function (fn, acc, ctr, ls) {
		if (!ls.b) {
			return acc;
		} else {
			var a = ls.a;
			var r1 = ls.b;
			if (!r1.b) {
				return A2(fn, a, acc);
			} else {
				var b = r1.a;
				var r2 = r1.b;
				if (!r2.b) {
					return A2(
						fn,
						a,
						A2(fn, b, acc));
				} else {
					var c = r2.a;
					var r3 = r2.b;
					if (!r3.b) {
						return A2(
							fn,
							a,
							A2(
								fn,
								b,
								A2(fn, c, acc)));
					} else {
						var d = r3.a;
						var r4 = r3.b;
						var res = (ctr > 500) ? A3(
							elm$core$List$foldl,
							fn,
							acc,
							elm$core$List$reverse(r4)) : A4(elm$core$List$foldrHelper, fn, acc, ctr + 1, r4);
						return A2(
							fn,
							a,
							A2(
								fn,
								b,
								A2(
									fn,
									c,
									A2(fn, d, res))));
					}
				}
			}
		}
	});
var elm$core$List$foldr = F3(
	function (fn, acc, ls) {
		return A4(elm$core$List$foldrHelper, fn, acc, 0, ls);
	});
var elm$core$List$map = F2(
	function (f, xs) {
		return A3(
			elm$core$List$foldr,
			F2(
				function (x, acc) {
					return A2(
						elm$core$List$cons,
						f(x),
						acc);
				}),
			_List_Nil,
			xs);
	});
var elm$core$List$any = F2(
	function (isOkay, list) {
		any:
		while (true) {
			if (!list.b) {
				return false;
			} else {
				var x = list.a;
				var xs = list.b;
				if (isOkay(x)) {
					return true;
				} else {
					var $temp$isOkay = isOkay,
						$temp$list = xs;
					isOkay = $temp$isOkay;
					list = $temp$list;
					continue any;
				}
			}
		}
	});
var elm$core$List$member = F2(
	function (x, xs) {
		return A2(
			elm$core$List$any,
			function (a) {
				return _Utils_eq(a, x);
			},
			xs);
	});
var elm$core$Maybe$andThen = F2(
	function (callback, maybeValue) {
		if (!maybeValue.$) {
			var value = maybeValue.a;
			return callback(value);
		} else {
			return elm$core$Maybe$Nothing;
		}
	});
var elm$core$Maybe$withDefault = F2(
	function (_default, maybe) {
		if (!maybe.$) {
			var value = maybe.a;
			return value;
		} else {
			return _default;
		}
	});
var elm$json$Json$Encode$null = _Json_encodeNull;
var author$project$Eval$Try$listTuple2 = function () {
	var resolveMaybes = function (ls) {
		var _n0 = A2(elm$core$List$member, elm$core$Maybe$Nothing, ls);
		if (_n0) {
			return elm$core$Maybe$Nothing;
		} else {
			return elm$core$Maybe$Just(
				A2(
					elm$core$List$map,
					elm$core$Maybe$withDefault(
						_Utils_Tuple2(elm$json$Json$Encode$null, elm$json$Json$Encode$null)),
					ls));
		}
	};
	return A2(
		elm$core$Basics$composeR,
		author$project$Eval$Try$listList,
		A2(
			elm$core$Basics$composeR,
			elm$core$Maybe$map(
				elm$core$List$map(author$project$Eval$Try$tuple2)),
			elm$core$Maybe$andThen(resolveMaybes)));
}();
var elm$core$List$append = F2(
	function (xs, ys) {
		if (!ys.b) {
			return xs;
		} else {
			return A3(elm$core$List$foldr, elm$core$List$cons, ys, xs);
		}
	});
var elm$core$List$concat = function (lists) {
	return A3(elm$core$List$foldr, elm$core$List$append, _List_Nil, lists);
};
var elm$core$List$intersperse = F2(
	function (sep, xs) {
		if (!xs.b) {
			return _List_Nil;
		} else {
			var hd = xs.a;
			var tl = xs.b;
			var step = F2(
				function (x, rest) {
					return A2(
						elm$core$List$cons,
						sep,
						A2(elm$core$List$cons, x, rest));
				});
			var spersed = A3(elm$core$List$foldr, step, _List_Nil, tl);
			return A2(elm$core$List$cons, hd, spersed);
		}
	});
var elm$core$List$isEmpty = function (xs) {
	if (!xs.b) {
		return true;
	} else {
		return false;
	}
};
var elm$core$List$product = function (numbers) {
	return A3(elm$core$List$foldl, elm$core$Basics$mul, 1, numbers);
};
var elm$core$List$repeatHelp = F3(
	function (result, n, value) {
		repeatHelp:
		while (true) {
			if (n <= 0) {
				return result;
			} else {
				var $temp$result = A2(elm$core$List$cons, value, result),
					$temp$n = n - 1,
					$temp$value = value;
				result = $temp$result;
				n = $temp$n;
				value = $temp$value;
				continue repeatHelp;
			}
		}
	});
var elm$core$List$repeat = F2(
	function (n, value) {
		return A3(elm$core$List$repeatHelp, _List_Nil, n, value);
	});
var elm$core$List$sum = function (numbers) {
	return A3(elm$core$List$foldl, elm$core$Basics$add, 0, numbers);
};
var elm$core$List$takeReverse = F3(
	function (n, list, kept) {
		takeReverse:
		while (true) {
			if (n <= 0) {
				return kept;
			} else {
				if (!list.b) {
					return kept;
				} else {
					var x = list.a;
					var xs = list.b;
					var $temp$n = n - 1,
						$temp$list = xs,
						$temp$kept = A2(elm$core$List$cons, x, kept);
					n = $temp$n;
					list = $temp$list;
					kept = $temp$kept;
					continue takeReverse;
				}
			}
		}
	});
var elm$core$List$takeTailRec = F2(
	function (n, list) {
		return elm$core$List$reverse(
			A3(elm$core$List$takeReverse, n, list, _List_Nil));
	});
var elm$core$List$takeFast = F3(
	function (ctr, n, list) {
		if (n <= 0) {
			return _List_Nil;
		} else {
			var _n0 = _Utils_Tuple2(n, list);
			_n0$1:
			while (true) {
				_n0$5:
				while (true) {
					if (!_n0.b.b) {
						return list;
					} else {
						if (_n0.b.b.b) {
							switch (_n0.a) {
								case 1:
									break _n0$1;
								case 2:
									var _n2 = _n0.b;
									var x = _n2.a;
									var _n3 = _n2.b;
									var y = _n3.a;
									return _List_fromArray(
										[x, y]);
								case 3:
									if (_n0.b.b.b.b) {
										var _n4 = _n0.b;
										var x = _n4.a;
										var _n5 = _n4.b;
										var y = _n5.a;
										var _n6 = _n5.b;
										var z = _n6.a;
										return _List_fromArray(
											[x, y, z]);
									} else {
										break _n0$5;
									}
								default:
									if (_n0.b.b.b.b && _n0.b.b.b.b.b) {
										var _n7 = _n0.b;
										var x = _n7.a;
										var _n8 = _n7.b;
										var y = _n8.a;
										var _n9 = _n8.b;
										var z = _n9.a;
										var _n10 = _n9.b;
										var w = _n10.a;
										var tl = _n10.b;
										return (ctr > 1000) ? A2(
											elm$core$List$cons,
											x,
											A2(
												elm$core$List$cons,
												y,
												A2(
													elm$core$List$cons,
													z,
													A2(
														elm$core$List$cons,
														w,
														A2(elm$core$List$takeTailRec, n - 4, tl))))) : A2(
											elm$core$List$cons,
											x,
											A2(
												elm$core$List$cons,
												y,
												A2(
													elm$core$List$cons,
													z,
													A2(
														elm$core$List$cons,
														w,
														A3(elm$core$List$takeFast, ctr + 1, n - 4, tl)))));
									} else {
										break _n0$5;
									}
							}
						} else {
							if (_n0.a === 1) {
								break _n0$1;
							} else {
								break _n0$5;
							}
						}
					}
				}
				return list;
			}
			var _n1 = _n0.b;
			var x = _n1.a;
			return _List_fromArray(
				[x]);
		}
	});
var elm$core$List$take = F2(
	function (n, list) {
		return A3(elm$core$List$takeFast, 0, n, list);
	});
var elm$core$List$unzip = function (pairs) {
	var step = F2(
		function (_n0, _n1) {
			var x = _n0.a;
			var y = _n0.b;
			var xs = _n1.a;
			var ys = _n1.b;
			return _Utils_Tuple2(
				A2(elm$core$List$cons, x, xs),
				A2(elm$core$List$cons, y, ys));
		});
	return A3(
		elm$core$List$foldr,
		step,
		_Utils_Tuple2(_List_Nil, _List_Nil),
		pairs);
};
var author$project$Eval$Core$List$lib = function (fName) {
	switch (fName) {
		case 'singleton':
			return elm$core$Result$Ok(
				author$project$Eval$Function$F1(
					function (a) {
						return elm$core$Result$Ok(
							A2(
								elm$json$Json$Encode$list,
								function (v) {
									return v;
								},
								_List_fromArray(
									[a])));
					}));
		case 'repeat':
			return elm$core$Result$Ok(
				author$project$Eval$Function$F2(
					A4(
						author$project$Eval$Wrap$a2,
						elm$core$List$repeat,
						_Utils_Tuple2(author$project$Eval$Try$int, elm$core$Maybe$Just),
						elm$json$Json$Encode$list(
							function (v) {
								return v;
							}),
						A2(author$project$Eval$Core$Error$expected, fName, '[integer, any]'))));
		case 'range':
			return elm$core$Result$Ok(
				author$project$Eval$Function$F2(
					A4(
						author$project$Eval$Wrap$a2,
						elm$core$List$range,
						_Utils_Tuple2(author$project$Eval$Try$int, author$project$Eval$Try$int),
						elm$json$Json$Encode$list(elm$json$Json$Encode$int),
						A2(author$project$Eval$Core$Error$expected, fName, '[integer, integer]'))));
		case '(::)':
			return elm$core$Result$Ok(
				author$project$Eval$Function$F2(
					A4(
						author$project$Eval$Wrap$a2,
						elm$core$List$cons,
						_Utils_Tuple2(elm$core$Maybe$Just, author$project$Eval$Try$list),
						elm$json$Json$Encode$list(
							function (v) {
								return v;
							}),
						A2(author$project$Eval$Core$Error$expected, fName, '[any, array]'))));
		case 'map':
			return elm$core$Result$Err(
				author$project$Eval$Core$Error$noFunction(fName));
		case 'indexedMap':
			return elm$core$Result$Err(
				author$project$Eval$Core$Error$noFunction(fName));
		case 'foldl':
			return elm$core$Result$Err(
				author$project$Eval$Core$Error$noFunction(fName));
		case 'foldr':
			return elm$core$Result$Err(
				author$project$Eval$Core$Error$noFunction(fName));
		case 'filter':
			return elm$core$Result$Err(
				author$project$Eval$Core$Error$noFunction(fName));
		case 'filterMap':
			return elm$core$Result$Err(
				author$project$Eval$Core$Error$noFunction(fName));
		case 'length':
			return elm$core$Result$Ok(
				author$project$Eval$Function$F1(
					A4(
						author$project$Eval$Wrap$a1,
						elm$core$List$length,
						author$project$Eval$Try$list,
						elm$json$Json$Encode$int,
						A2(author$project$Eval$Core$Error$expected, fName, '[array]'))));
		case 'reverse':
			return elm$core$Result$Ok(
				author$project$Eval$Function$F1(
					A4(
						author$project$Eval$Wrap$a1,
						elm$core$List$reverse,
						author$project$Eval$Try$list,
						elm$json$Json$Encode$list(
							function (v) {
								return v;
							}),
						A2(author$project$Eval$Core$Error$expected, fName, '[array]'))));
		case 'member':
			return elm$core$Result$Err(
				author$project$Eval$Core$Error$noCompare(fName));
		case 'all':
			return elm$core$Result$Err(
				author$project$Eval$Core$Error$noCompare(fName));
		case 'any':
			return elm$core$Result$Err(
				author$project$Eval$Core$Error$noCompare(fName));
		case 'maximum':
			return elm$core$Result$Err(
				author$project$Eval$Core$Error$noCompare(fName));
		case 'minimum':
			return elm$core$Result$Err(
				author$project$Eval$Core$Error$noCompare(fName));
		case 'sum':
			return elm$core$Result$Ok(
				author$project$Eval$Function$F1(
					A4(
						author$project$Eval$Wrap$a1,
						elm$core$List$sum,
						author$project$Eval$Try$listFloat,
						elm$json$Json$Encode$float,
						A2(author$project$Eval$Core$Error$expected, fName, '[array(number)]'))));
		case 'product':
			return elm$core$Result$Ok(
				author$project$Eval$Function$F1(
					A4(
						author$project$Eval$Wrap$a1,
						elm$core$List$product,
						author$project$Eval$Try$listFloat,
						elm$json$Json$Encode$float,
						A2(author$project$Eval$Core$Error$expected, fName, '[array(number)]'))));
		case 'append':
			return elm$core$Result$Ok(
				author$project$Eval$Function$F2(
					A4(
						author$project$Eval$Wrap$a2,
						elm$core$List$append,
						_Utils_Tuple2(author$project$Eval$Try$list, author$project$Eval$Try$list),
						elm$json$Json$Encode$list(
							function (v) {
								return v;
							}),
						A2(author$project$Eval$Core$Error$expected, fName, '[array, array]'))));
		case 'concat':
			return elm$core$Result$Ok(
				author$project$Eval$Function$F1(
					A4(
						author$project$Eval$Wrap$a1,
						elm$core$List$concat,
						author$project$Eval$Try$listList,
						elm$json$Json$Encode$list(
							function (v) {
								return v;
							}),
						A2(author$project$Eval$Core$Error$expected, fName, '[array(array)]'))));
		case 'concatMap':
			return elm$core$Result$Err(
				author$project$Eval$Core$Error$noFunction(fName));
		case 'intersperse':
			return elm$core$Result$Ok(
				author$project$Eval$Function$F2(
					A4(
						author$project$Eval$Wrap$a2,
						elm$core$List$intersperse,
						_Utils_Tuple2(elm$core$Maybe$Just, author$project$Eval$Try$list),
						elm$json$Json$Encode$list(
							function (v) {
								return v;
							}),
						A2(author$project$Eval$Core$Error$expected, fName, '[any, array]'))));
		case 'map2':
			return elm$core$Result$Err(
				author$project$Eval$Core$Error$noFunction(fName));
		case 'map3':
			return elm$core$Result$Err(
				author$project$Eval$Core$Error$noFunction(fName));
		case 'map4':
			return elm$core$Result$Err(
				author$project$Eval$Core$Error$noFunction(fName));
		case 'map5':
			return elm$core$Result$Err(
				author$project$Eval$Core$Error$noFunction(fName));
		case 'sort':
			return elm$core$Result$Err(
				author$project$Eval$Core$Error$noCompare(fName));
		case 'sortBy':
			return elm$core$Result$Err(
				author$project$Eval$Core$Error$noCompare(fName));
		case 'sortWith':
			return elm$core$Result$Err(
				author$project$Eval$Core$Error$noCompare(fName));
		case 'isEmpty':
			return elm$core$Result$Ok(
				author$project$Eval$Function$F1(
					A4(
						author$project$Eval$Wrap$a1,
						elm$core$List$isEmpty,
						author$project$Eval$Try$list,
						elm$json$Json$Encode$bool,
						A2(author$project$Eval$Core$Error$expected, fName, '[array]'))));
		case 'head':
			return elm$core$Result$Ok(
				author$project$Eval$Function$F1(
					function (value) {
						var _n1 = A2(
							elm$core$Maybe$withDefault,
							_List_Nil,
							author$project$Eval$Try$list(value));
						if (!_n1.b) {
							return elm$core$Result$Err('Can\'t return the first element of an empty array.');
						} else {
							var first = _n1.a;
							return elm$core$Result$Ok(first);
						}
					}));
		case 'tail':
			return elm$core$Result$Ok(
				author$project$Eval$Function$F1(
					function (value) {
						var _n2 = A2(
							elm$core$Maybe$withDefault,
							_List_Nil,
							author$project$Eval$Try$list(value));
						if (!_n2.b) {
							return elm$core$Result$Err('Can\'t partition an empty array.');
						} else {
							var rest = _n2.b;
							return elm$core$Result$Ok(
								A2(
									elm$json$Json$Encode$list,
									function (v) {
										return v;
									},
									rest));
						}
					}));
		case 'take':
			return elm$core$Result$Ok(
				author$project$Eval$Function$F2(
					A4(
						author$project$Eval$Wrap$a2,
						elm$core$List$take,
						_Utils_Tuple2(author$project$Eval$Try$int, author$project$Eval$Try$list),
						elm$json$Json$Encode$list(
							function (v) {
								return v;
							}),
						A2(author$project$Eval$Core$Error$expected, fName, '[integer, array]'))));
		case 'drop':
			return elm$core$Result$Ok(
				author$project$Eval$Function$F2(
					A4(
						author$project$Eval$Wrap$a2,
						elm$core$List$drop,
						_Utils_Tuple2(author$project$Eval$Try$int, author$project$Eval$Try$list),
						elm$json$Json$Encode$list(
							function (v) {
								return v;
							}),
						A2(author$project$Eval$Core$Error$expected, fName, '[integer, array]'))));
		case 'partition':
			return elm$core$Result$Err(
				author$project$Eval$Core$Error$noCompare(fName));
		case 'unzip':
			return elm$core$Result$Ok(
				author$project$Eval$Function$F1(
					A4(
						author$project$Eval$Wrap$a1,
						elm$core$List$unzip,
						author$project$Eval$Try$listTuple2,
						function (_n3) {
							var a = _n3.a;
							var b = _n3.b;
							return A2(
								elm$json$Json$Encode$list,
								elm$json$Json$Encode$list(
									function (v) {
										return v;
									}),
								_List_fromArray(
									[a, b]));
						},
						A2(author$project$Eval$Core$Error$expected, fName, '[array(array-2n)]'))));
		default:
			return elm$core$Result$Err(
				A2(author$project$Eval$Core$Error$notFound, 'List', fName));
	}
};
var author$project$Eval$Core$lib = function (expression) {
	var parts = A2(elm$core$String$split, '.', expression);
	var _n0 = function () {
		var _n1 = _Utils_Tuple3(
			elm$core$List$length(parts),
			parts,
			A2(elm$core$List$drop, 1, parts));
		_n1$2:
		while (true) {
			if (_n1.b.b) {
				if (!_n1.c.b) {
					if (_n1.a === 1) {
						var _n2 = _n1.b;
						var first = _n2.a;
						var rest = _n2.b;
						return _Utils_Tuple2('Basics', first);
					} else {
						break _n1$2;
					}
				} else {
					if ((_n1.a === 2) && (!_n1.c.b.b)) {
						var _n3 = _n1.b;
						var first = _n3.a;
						var rest = _n3.b;
						var _n4 = _n1.c;
						var second = _n4.a;
						return _Utils_Tuple2(first, second);
					} else {
						break _n1$2;
					}
				}
			} else {
				break _n1$2;
			}
		}
		return _Utils_Tuple2('', '');
	}();
	var moduleName = _n0.a;
	var fName = _n0.b;
	switch (moduleName) {
		case 'Basics':
			return author$project$Eval$Core$Basics$lib(fName);
		case 'List':
			return author$project$Eval$Core$List$lib(fName);
		case 'Array':
			return author$project$Eval$Core$Array$lib(fName);
		case 'Dict':
			return author$project$Eval$Core$Dict$lib(fName);
		default:
			return elm$core$Result$Err('A module named `' + (moduleName + ('` was not found in Elm\'s core libraries. ' + ('Note that Elm module names are always capitalized and that ' + ('module and function names should be separated by a single `.` ' + '(example: `String.length`).')))));
	}
};
var author$project$Eval$coreLib = author$project$Eval$Core$lib;
var author$project$Eval$Resolve$list = A2(
	elm$core$Basics$composeR,
	elm$core$Maybe$andThen(
		A2(
			elm$core$Basics$composeR,
			elm$json$Json$Decode$decodeValue(
				elm$json$Json$Decode$list(elm$json$Json$Decode$value)),
			elm$core$Result$toMaybe)),
	elm$core$Maybe$withDefault(_List_Nil));
var elm$json$Json$Decode$string = _Json_decodeString;
var author$project$Eval$Resolve$string = A2(
	elm$core$Basics$composeR,
	elm$core$Maybe$andThen(
		A2(
			elm$core$Basics$composeR,
			elm$json$Json$Decode$decodeValue(elm$json$Json$Decode$string),
			elm$core$Result$toMaybe)),
	elm$core$Maybe$withDefault(''));
var elm$json$Json$Decode$field = _Json_decodeField;
var author$project$Eval$Try$field = function (key) {
	return A2(
		elm$core$Basics$composeR,
		elm$json$Json$Decode$decodeValue(
			A2(elm$json$Json$Decode$field, key, elm$json$Json$Decode$value)),
		elm$core$Result$toMaybe);
};
var author$project$Eval$Call$parse = function (object) {
	return {
		d: author$project$Eval$Resolve$list(
			A2(author$project$Eval$Try$field, 'args', object)),
		e: author$project$Eval$Resolve$string(
			A2(author$project$Eval$Try$field, 'f', object))
	};
};
var author$project$Eval$parse = author$project$Eval$Call$parse;
var author$project$Main$Receive = elm$core$Basics$identity;
var elm$json$Json$Encode$string = _Json_wrap;
var author$project$Main$encodeResult = function (result) {
	if (!result.$) {
		var value = result.a;
		return elm$json$Json$Encode$object(
			_List_fromArray(
				[
					_Utils_Tuple2(
					'resolve',
					elm$json$Json$Encode$bool(true)),
					_Utils_Tuple2('value', value),
					_Utils_Tuple2('error', elm$json$Json$Encode$null)
				]));
	} else {
		var message = result.a;
		return elm$json$Json$Encode$object(
			_List_fromArray(
				[
					_Utils_Tuple2(
					'resolve',
					elm$json$Json$Encode$bool(false)),
					_Utils_Tuple2('value', elm$json$Json$Encode$null),
					_Utils_Tuple2(
					'error',
					elm$json$Json$Encode$string(message))
				]));
	}
};
var author$project$Main$incoming = _Platform_incomingPort('incoming', elm$json$Json$Decode$value);
var elm$core$Basics$identity = function (x) {
	return x;
};
var author$project$Main$outgoing = _Platform_outgoingPort('outgoing', elm$core$Basics$identity);
var elm$core$List$singleton = function (value) {
	return _List_fromArray(
		[value]);
};
var elm$core$Platform$worker = _Platform_worker;
var elm$core$Platform$Cmd$batch = _Platform_batch;
var elm$core$Platform$Cmd$none = elm$core$Platform$Cmd$batch(_List_Nil);
var elm$core$Platform$Sub$batch = _Platform_batch;
var elm$core$Tuple$mapBoth = F3(
	function (funcA, funcB, _n0) {
		var x = _n0.a;
		var y = _n0.b;
		return _Utils_Tuple2(
			funcA(x),
			funcB(y));
	});
var elm$json$Json$Decode$succeed = _Json_succeed;
var author$project$Main$main = elm$core$Platform$worker(
	{
		i: function (_n0) {
			return _Utils_Tuple2(elm$core$Maybe$Nothing, elm$core$Platform$Cmd$none);
		},
		j: function (_n1) {
			return elm$core$Platform$Sub$batch(
				elm$core$List$singleton(
					author$project$Main$incoming(elm$core$Basics$identity)));
		},
		k: F2(
			function (_n2, _n3) {
				var object = _n2;
				return A3(
					elm$core$Tuple$mapBoth,
					elm$core$Maybe$Just,
					A2(
						elm$core$Basics$composeR,
						author$project$Eval$call(author$project$Eval$coreLib),
						A2(elm$core$Basics$composeR, author$project$Main$encodeResult, author$project$Main$outgoing)),
					function (r) {
						return _Utils_Tuple2(r, r);
					}(
						author$project$Eval$parse(object)));
			})
	});
_Platform_export({'Main':{'init':author$project$Main$main(
	elm$json$Json$Decode$succeed(0))(0)}});}(this));