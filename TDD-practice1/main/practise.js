const tags = [
    'ITEM000001',
    'ITEM000001',
    'ITEM000001',
    'ITEM000001',
    'ITEM000001',
    'ITEM000003-2.5',
    'ITEM000005',
    'ITEM000005-2',
];

function list(tags) {
        var itemsoftags = []
        var itemoftags ={}
        itemoftags.barcode=tags[0]
        itemoftags.count=0;
        itemsoftags.push(itemoftags)
        for (var i=0;i<tags.length;i++) {
            if (itemoftags.barcode === tags[i]) {
                itemoftags.count+=1;
            } else if (itemoftags.barcode !== tags[i]){
                var itemoftags={};
                itemoftags.barcode=tags[i]
                itemoftags.count=1;
                itemsoftags.push(itemoftags)

            }
        }
return itemsoftags
    }
console.log(list(tags))
var itemsoftags=list(tags);
function split(itemsoftags) {
    for(var i=0;i<itemsoftags.length;i++){
        if (itemsoftags[i].barcode.indexOf('-')===-1){continue
        }else {
            var cnt=itemsoftags[i].barcode.slice(11)
            itemsoftags[i].barcode=itemsoftags[i].barcode.slice(0,10)

        }
    }

}