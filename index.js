function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.getElementById("nested").querySelector(".target");
}

function increaseRankBy(n){
  let rankedLists = document.querySelectorAll(".ranked-list")
  rankedLists.forEach(function(list){
    let lis = list.querySelectorAll(".ranked-list li")
    for(let i = 0; i < lis.length; i++){
      lis[i].innerHTML = (parseInt(lis[i].innerHTML) + n).toString();
    }
  })
}

function deepestChild(){
  let node = document.querySelector("#grand-node")
  let nextNode = node.children[0]
  while (nextNode){
    node = nextNode;
    nextNode = node.children[0]
  }
  return node;
}
