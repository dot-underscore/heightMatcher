(function($) {

    $.fn.heightMatcher = function() {

        resize_element(this)

        function resize_element(el){
            var sizes = [];
            el.each( function() {
                sizes.push($(this).height());
            });
            var largest = Math.max.apply(Math, sizes);

            el.each( function() {
                sizes.push($(this).height(largest));
            });
        }
    }

}(jQuery));