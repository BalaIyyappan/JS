(function(){
    var arr1=[1,2,3,4,5];
    var arr2=[6,7,8,9,10];
    arr1=arr1.sort();
    arr2=arr2.sort();

    var l1=Math.round(arr1.length/2);
    var l2=Math.round(arr2.length/2);
    
    var mid=arr1[l1-1]+arr2[l2-1];
    var avg=mid/2;
    console.log(avg);
})
();
