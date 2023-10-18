var jsl = document.querySelector('.js-list');
var textA = document.querySelector('#todoText');
var sub = document.querySelector('.submitTodo');
var err = document.querySelector('#error');



sub.addEventListener('click', function(){
  
  if (textA.value === '') {
    err.textContent = 'Add some Todo!';
    err.className = 'error open';
    
  } else {
    err.textContent = '';
    err.className = 'error';
    var jsl = document.querySelector('.js-list');
    var lis = document.createElement('li');
    lis.className = 'todo'
    lis.textContent = textA.value
    var btn = document.createElement('button');
    btn.className = 'remove';
    btn.textContent = 'Delete'
    jsl.appendChild(lis);
    lis.appendChild(btn);
    textA.value = ''
    remove();
  };
});



function remove(){
  var removeAll = document.querySelectorAll('.remove');
  Array.prototype.forEach.call(removeAll, function (remove) {
    remove.addEventListener('click', function () {
      var r = this.parentElement;
      var rp = r.parentElement;
      rp.removeChild(r);
    });
  });
}
