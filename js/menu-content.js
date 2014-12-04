(function($) { Drupal.behaviors.menuContentDropdown = {
    attach: function (context) {
      $('#block-system-main-menu > div.content > ul.menu > li.expanded', context).once(function() {
        //Get the current menu item's link
        if ($(this).find('a').attr('href').search('http')) {
          var item = $(this).find('a').attr('href').substring(1);
        } else {
          var item = $(this).find('a').attr('href');
        }
        alert(item);
        //Create the dropdown content object
        var menuContent = Drupal.settings.menu_content[item];
        //Get the current menu's submenus
        var subMenu = $(this).find('> ul.menu');
        //Add the submenu and the menu content
        var dropdown = $('<div class="menu-content" />').append(menuContent).append(subMenu);
        $(this).append(dropdown);
      });
    }
  }
})(jQuery);
