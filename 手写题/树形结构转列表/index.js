const data = [
    {
        id: 1,
        text: '节点1',
        parentId: 0,
        children: [
            // {
            //     id: 2,
            //     text: '节点1_1',
            //     parentId: 1
            // }
        ]
    }
]
function treeToList(data) {
    let res = [];
    const dfs = (tree) => {
        tree.forEach((item) => {
            if (item.children) {
                dfs(item.children);
                delete item.children;
            }
            res.push(item);
        });
    };
    dfs(data);
    return res;
}

function myTreeToList(data){
    let res = []
    const dfs = (data) =>{
        data.forEach(item =>{
            if(item.children){
                dfs(item.children)
                delete item.children
            }
            res.push(item)
        })
    }
    dfs(data)
    return res
}

const result = treeToList(data)
console.log(result);