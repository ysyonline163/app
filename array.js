/**
 * Created by Administrator on 2016/11/28 0028.
 */
(function( o ){
    //================================= indexOf ========================================
    (function(){
        var arr = [1,2,3,4,5];
        var pos = arr.indexOf(4);
        console.log("indexOf ==>" + pos);
    })('indexOf');

    //================================= slice ========================================
    (function(){
        var arr = [1,2,3,4,5];
        var slice_arry = arr.slice( 2, 4 );
        console.log("slice ==>" + slice_arry);
        slice_arry = arr.slice( );
        console.log(slice_arry === arr );
    })('slice');

    //================================ push & pop ===========================================
    (function(){
        var arr = [1,2,3,4,5];
        arr.push('a','b','c');
        console.log("push==>" + arr);
        arr.pop();
        console.log("pop==>"+arr);
    })('push & pop');

    //================================ shift & unshift ===========================================
    (function(){
        var arr = [1,2,3,4,5];
        arr.unshift('aaa');
        console.log('unshift==>' + arr);
        arr.shift();
        console.log('shift==>'+arr);
    })('shift & unshift');













})({});