var jsxModel = (function($){
    var myPrivateVar, myPrivateMethod;
    myPrivateVar = 0;
    myPrivateMethod = function(str){
        alert(str);
        var a = new Array('a','b','c');
        $(a).each(function(i,e){
            alert(i + ":" + e);
        });
    };
    return {
        myPublicVar:'foox',
        myPublicMethod: function(bar) {
            myPrivateVar++;
            myPrivateMethod(bar);
        }
    };
})(jQuery);