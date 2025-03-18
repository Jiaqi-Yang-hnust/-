/*点击上传头像后，获取该元素，通过添加change监听事件，点击文件后触发。 */
document.getElementById('avatarInput').addEventListener('change', function(event) {
    var reader = new FileReader();
    reader.onload = function(e) {
      document.getElementById('avatar').src = e.target.result;/*src 属性设置为读取到的文件内容 */
    };
    reader.readAsDataURL(event.target.files[0]);
  });

function saveProfile() {
    alert('保存成功!');/*点击按钮后，显示内容*/
}


