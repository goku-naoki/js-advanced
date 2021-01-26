$(function(){

  function buildForm(categories){

    let options='';
    categories.forEach(function (category) { // カテゴリを一つずつ渡してoptionタグを一つずつ組み立てていく。
      options += `
                  <option value="${category.id}">${category.name}</option>
                 `;
    });
    
    const html=`
     <select class="form-pull-down select-category"  name="category_id">
      <option value="">---</option>
      ${options}
     </select>
    `
    return html
  }



  $('.form').on('change','.select-category',function(){
    const category_id=$(this).val()
    $(this).nextAll().remove()

    $.ajax({
      type: "GET",
      url: "/api/items/category",
      data: {category_id: category_id },
      dataType: 'json'
    })
    .done(function(categories) {
      if(categories.length==0){
        return false
      }
      
      const select_form=buildForm(categories)
      const target=$('.form')
      target.append(select_form)
    
    })
    .fail(function() {
      alert('失敗')
    });
  })
});