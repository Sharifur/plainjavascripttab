/*------------------------------
    Xgenious Plain Js Tab 
------------------------------*/

var xgtabnav = document.getElementsByClassName('xgnav-tabs');

for (let i = 0; i < xgtabnav.length; i++) {
    const tabNav = xgtabnav[i].children;

    for (let j = 0; j < tabNav.length; j++) {

        const Nav = tabNav[j];
        Nav.onclick = function (e) {

            for (let sibling of this.parentNode.children) {
                if (sibling !== this) sibling.classList.remove('active');
            }
             this.classList.add('active');
             const contentID = tabNav[j].attributes['data-target'].value.substr(1);
             const tabPaneId = this.parentNode.nextSibling.nextElementSibling.children;
            //  console.log(tabPaneId)
             //document.getElementsByClassName('xgtab-pane');
            for (let t = 0; t < tabPaneId.length; t++) {
                tabPaneId[t].classList = 'xgtab-pane fade';
            }
            document.getElementById(contentID).classList.add('active');
            document.getElementById(contentID).classList.add('show');
        }
        
    }
    
}
