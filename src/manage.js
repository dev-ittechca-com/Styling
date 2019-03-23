function onChange(item) {}
function onError(error) { console.log(`${error}`); }
function objectLength(object) { var length = 0; for(var key in object) { if( object.hasOwnProperty(key) ) { ++length; } } return length; };
function sendMessageToTabs(tabs) {
  for (let tab of tabs) {
    browser.tabs.sendMessage(tab.id, { message: "update scripts" }).then(response => {}).catch(onError);
  }
}
$(function() {
  browser.storage.local.get().then(function(item) {
    var styles = objectLength(item) - 1;
    for (a = 1; a <= styles; a++) {
      $('#content').append('<div class="style" id="style_'+a+'" data-id="'+a+'"><input type="checkbox"><span class="name" title="'+item["styling_"+a].name+'">'+item["styling_"+a].name+'</span><button class="edit" data-id="'+a+'">Edit</button><button class="delete" data-id="'+a+'">Delete</button><div class="url_list"></div></div>');
    }
  });
  $(document).on('click', '.edit', function() {
    window.location.href = "edit.html?style="+$(this).parent().data("id");
  });
  $(document).on('click', '.delete', function() {
  	var confirmation = confirm("Are you sure you want to delete "+$(this).parent().prop("title")+"?");
    if (confirmation) { window.location.href = "edit.html?delete="+$(this).parent().data("id"); }
  });
});
browser.runtime.onMessage.addListener(function(message) { if (message.message === "all styles disabled") { $('#enabled').prop('disabled', true); } else if (message.message === "all styles enabled") { $('#enabled').prop('disabled', false); } });

