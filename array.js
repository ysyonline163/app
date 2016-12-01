/**
 * Created by Administrator on 2016/11/28 0028.
 */
'use strict';
(function( o ){
    //================================= indexOf ==================================
    (function(){
        var arr = [1,2,3,4,5];
        var pos = arr.indexOf(4);
        console.log("indexOf ==>" + pos);
    })('indexOf');

    //================================= slice ====================================
    (function(){
        var arr = [1,2,3,4,5];
        var slice_arry = arr.slice( 2, 4 );
        console.log("slice ==>" + slice_arry);
        slice_arry = arr.slice( );
        console.log(slice_arry === arr );
    })('slice');

    //================================ push & pop ================================
    (function(){
        var arr = [1,2,3,4,5];
        arr.push('a','b','c');
        console.log("push==>" + arr);
        arr.pop();
        console.log("pop==>"+arr);
    })('push & pop');

    //================================ shift & unshift ===========================
    (function(){
        var arr = [1,2,3,4,5];
        arr.unshift('aaa');
        console.log('unshift==>' + arr);
        arr.shift();
        console.log('shift==>'+arr);
    })('shift & unshift');

    //================================ splice =====================================
    (function(){
        var arr = [1,2,3,4,5];
        arr.splice( 1, 3, 'a', 'b', 'c' );
        console.log('splice==>'+arr);
        arr.splice( 1, 0, 'a', 'b', 'c' );
        console.log('splice==>' + arr);
    })('splice');

    //================================ concat =====================================
    (function(){
        var arr =[];
        var brr = [1,2,3,4,5];
        var concat_arr = arr.concat(brr);
        console.log('concat==>' + concat_arr);
    })('concat');

    //================================ join =====================================
    (function(){
        var arr = ['2016','12','2'];
        var brr = ['00','59','32'];
        var time = arr.join('-') + " " + brr.join(':');
        console.log(time);
    })('join');





})({});