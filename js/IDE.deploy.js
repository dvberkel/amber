smalltalk.addPackage('IDE', {});
smalltalk.addClass('TabManager', smalltalk.Widget, ['selectedTab', 'tabs', 'opened', 'ul', 'input'], 'IDE');
smalltalk.addMethod(
unescape('_tabs'),
smalltalk.method({
selector: unescape('tabs'),
fn: function (){
var self=this;
return (($receiver = self['@tabs']) == nil || $receiver == undefined) ? (function(){return (self['@tabs']=smalltalk.send((smalltalk.Array || Array), "_new", []));})() : $receiver;
return self;}
}),
smalltalk.TabManager);

smalltalk.addMethod(
unescape('_labelFor_'),
smalltalk.method({
selector: unescape('labelFor%3A'),
fn: function (aWidget){
var self=this;
var label=nil;
var maxSize=nil;
(maxSize=(15));
(label=smalltalk.send(smalltalk.send(aWidget, "_label", []), "_copyFrom_to_", [(0), smalltalk.send(smalltalk.send(smalltalk.send(aWidget, "_label", []), "_size", []), "_min_", [maxSize])]));
((($receiver = ((($receiver = smalltalk.send(smalltalk.send(aWidget, "_label", []), "_size", [])).klass === smalltalk.Number) ? $receiver >maxSize : smalltalk.send($receiver, "__gt", [maxSize]))).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (label=smalltalk.send(label, "__comma", ["..."]));})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (label=smalltalk.send(label, "__comma", ["..."]));})]));
return label;
return self;}
}),
smalltalk.TabManager);

smalltalk.addMethod(
unescape('_updateBodyMargin'),
smalltalk.method({
selector: unescape('updateBodyMargin'),
fn: function (){
var self=this;
smalltalk.send(self, "_setBodyMargin_", [smalltalk.send(smalltalk.send(unescape("%23jtalk"), "_asJQuery", []), "_height", [])]);
return self;}
}),
smalltalk.TabManager);

smalltalk.addMethod(
unescape('_updatePosition'),
smalltalk.method({
selector: unescape('updatePosition'),
fn: function (){
var self=this;
jQuery('#jtalk').css('top', '').css('bottom', '0px');
return self;}
}),
smalltalk.TabManager);

smalltalk.addMethod(
unescape('_removeBodyMargin'),
smalltalk.method({
selector: unescape('removeBodyMargin'),
fn: function (){
var self=this;
smalltalk.send(self, "_setBodyMargin_", [(0)]);
return self;}
}),
smalltalk.TabManager);

smalltalk.addMethod(
unescape('_setBodyMargin_'),
smalltalk.method({
selector: unescape('setBodyMargin%3A'),
fn: function (anInteger){
var self=this;
smalltalk.send(smalltalk.send(".jtalkBody", "_asJQuery", []), "_css_put_", [unescape("margin-bottom"), smalltalk.send(smalltalk.send(anInteger, "_asString", []), "__comma", ["px"])]);
return self;}
}),
smalltalk.TabManager);

smalltalk.addMethod(
unescape('_onResize_'),
smalltalk.method({
selector: unescape('onResize%3A'),
fn: function (aBlock){
var self=this;
jQuery('#jtalk').resizable({
	handles: 'n', 
	resize: aBlock,
	minHeight: 230
});
return self;}
}),
smalltalk.TabManager);

smalltalk.addMethod(
unescape('_onWindowResize_'),
smalltalk.method({
selector: unescape('onWindowResize%3A'),
fn: function (aBlock){
var self=this;
jQuery(window).resize(aBlock);
return self;}
}),
smalltalk.TabManager);

smalltalk.addMethod(
unescape('_open'),
smalltalk.method({
selector: unescape('open'),
fn: function (){
var self=this;
((($receiver = self['@opened']).klass === smalltalk.Boolean) ? (! $receiver ? (function(){smalltalk.send(smalltalk.send("body", "_asJQuery", []), "_addClass_", ["jtalkBody"]);smalltalk.send(smalltalk.send(unescape("%23jtalk"), "_asJQuery", []), "_show", []);smalltalk.send(smalltalk.send(self['@ul'], "_asJQuery", []), "_show", []);smalltalk.send(self, "_updateBodyMargin", []);smalltalk.send(self['@selectedTab'], "_show", []);return (self['@opened']=true);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){smalltalk.send(smalltalk.send("body", "_asJQuery", []), "_addClass_", ["jtalkBody"]);smalltalk.send(smalltalk.send(unescape("%23jtalk"), "_asJQuery", []), "_show", []);smalltalk.send(smalltalk.send(self['@ul'], "_asJQuery", []), "_show", []);smalltalk.send(self, "_updateBodyMargin", []);smalltalk.send(self['@selectedTab'], "_show", []);return (self['@opened']=true);})]));
return self;}
}),
smalltalk.TabManager);

smalltalk.addMethod(
unescape('_close'),
smalltalk.method({
selector: unescape('close'),
fn: function (){
var self=this;
((($receiver = self['@opened']).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(smalltalk.send(unescape("%23jtalk"), "_asJQuery", []), "_hide", []);smalltalk.send(smalltalk.send(self['@ul'], "_asJQuery", []), "_hide", []);smalltalk.send(self['@selectedTab'], "_hide", []);smalltalk.send(self, "_removeBodyMargin", []);smalltalk.send(smalltalk.send("body", "_asJQuery", []), "_removeClass_", ["jtalkBody"]);return (self['@opened']=false);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(smalltalk.send(unescape("%23jtalk"), "_asJQuery", []), "_hide", []);smalltalk.send(smalltalk.send(self['@ul'], "_asJQuery", []), "_hide", []);smalltalk.send(self['@selectedTab'], "_hide", []);smalltalk.send(self, "_removeBodyMargin", []);smalltalk.send(smalltalk.send("body", "_asJQuery", []), "_removeClass_", ["jtalkBody"]);return (self['@opened']=false);})]));
return self;}
}),
smalltalk.TabManager);

smalltalk.addMethod(
unescape('_newBrowserTab'),
smalltalk.method({
selector: unescape('newBrowserTab'),
fn: function (){
var self=this;
smalltalk.send((smalltalk.Browser || Browser), "_open", []);
return self;}
}),
smalltalk.TabManager);

smalltalk.addMethod(
unescape('_selectTab_'),
smalltalk.method({
selector: unescape('selectTab%3A'),
fn: function (aWidget){
var self=this;
smalltalk.send(self, "_open", []);
(self['@selectedTab']=aWidget);
smalltalk.send(smalltalk.send(self, "_tabs", []), "_do_", [(function(each){return smalltalk.send(each, "_hide", []);})]);
smalltalk.send(aWidget, "_show", []);
smalltalk.send(self, "_update", []);
return self;}
}),
smalltalk.TabManager);

smalltalk.addMethod(
unescape('_closeTab_'),
smalltalk.method({
selector: unescape('closeTab%3A'),
fn: function (aWidget){
var self=this;
smalltalk.send(self, "_removeTab_", [aWidget]);
smalltalk.send(self, "_selectTab_", [smalltalk.send(smalltalk.send(self, "_tabs", []), "_last", [])]);
smalltalk.send(aWidget, "_remove", []);
smalltalk.send(self, "_update", []);
return self;}
}),
smalltalk.TabManager);

smalltalk.addMethod(
unescape('_search_'),
smalltalk.method({
selector: unescape('search%3A'),
fn: function (aString){
var self=this;
var searchedClass=nil;
(searchedClass=smalltalk.send(smalltalk.send((smalltalk.Smalltalk || Smalltalk), "_current", []), "_at_", [aString]));
((($receiver = smalltalk.send(searchedClass, "_isClass", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send((smalltalk.Browser || Browser), "_openOn_", [searchedClass]);})() : (function(){return smalltalk.send((smalltalk.ReferencesBrowser || ReferencesBrowser), "_search_", [aString]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send((smalltalk.Browser || Browser), "_openOn_", [searchedClass]);}), (function(){return smalltalk.send((smalltalk.ReferencesBrowser || ReferencesBrowser), "_search_", [aString]);})]));
return self;}
}),
smalltalk.TabManager);

smalltalk.addMethod(
unescape('_addTab_'),
smalltalk.method({
selector: unescape('addTab%3A'),
fn: function (aWidget){
var self=this;
smalltalk.send(smalltalk.send(self, "_tabs", []), "_add_", [aWidget]);
smalltalk.send(aWidget, "_appendToJQuery_", [smalltalk.send(unescape("%23jtalk"), "_asJQuery", [])]);
smalltalk.send(aWidget, "_hide", []);
return self;}
}),
smalltalk.TabManager);

smalltalk.addMethod(
unescape('_removeTab_'),
smalltalk.method({
selector: unescape('removeTab%3A'),
fn: function (aWidget){
var self=this;
smalltalk.send(smalltalk.send(self, "_tabs", []), "_remove_", [aWidget]);
smalltalk.send(self, "_update", []);
return self;}
}),
smalltalk.TabManager);

smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
fn: function (){
var self=this;
smalltalk.send(self, "_initialize", [], smalltalk.Widget);
(self['@opened']=true);
smalltalk.send((function(html){return smalltalk.send(smalltalk.send(html, "_div", []), "_id_", ["jtalk"]);}), "_appendToJQuery_", [smalltalk.send("body", "_asJQuery", [])]);
smalltalk.send(smalltalk.send("body", "_asJQuery", []), "_addClass_", ["jtalkBody"]);
smalltalk.send(self, "_appendToJQuery_", [smalltalk.send(unescape("%23jtalk"), "_asJQuery", [])]);
(function($rec){smalltalk.send($rec, "_addTab_", [smalltalk.send((smalltalk.IDETranscript || IDETranscript), "_current", [])]);smalltalk.send($rec, "_addTab_", [smalltalk.send((smalltalk.Workspace || Workspace), "_new", [])]);return smalltalk.send($rec, "_addTab_", [smalltalk.send((smalltalk.TestRunner || TestRunner), "_new", [])]);})(self);
smalltalk.send(self, "_selectTab_", [smalltalk.send(smalltalk.send(self, "_tabs", []), "_last", [])]);
(function($rec){smalltalk.send($rec, "_onResize_", [(function(){return (function($rec){smalltalk.send($rec, "_updateBodyMargin", []);return smalltalk.send($rec, "_updatePosition", []);})(self);})]);return smalltalk.send($rec, "_onWindowResize_", [(function(){return smalltalk.send(self, "_updatePosition", []);})]);})(self);
return self;}
}),
smalltalk.TabManager);

smalltalk.addMethod(
unescape('_renderOn_'),
smalltalk.method({
selector: unescape('renderOn%3A'),
fn: function (html){
var self=this;
smalltalk.send(smalltalk.send(html, "_div", []), "_id_", ["logo"]);
smalltalk.send(self, "_renderToolbarOn_", [html]);
(self['@ul']=(function($rec){smalltalk.send($rec, "_id_", ["jtalkTabs"]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(html, "_ul", [])));
smalltalk.send(self, "_renderTabs", []);
return self;}
}),
smalltalk.TabManager);

smalltalk.addMethod(
unescape('_renderTabFor_on_'),
smalltalk.method({
selector: unescape('renderTabFor%3Aon%3A'),
fn: function (aWidget, html){
var self=this;
var li=nil;
(li=smalltalk.send(html, "_li", []));
((($receiver = smalltalk.send(self['@selectedTab'], "__eq", [aWidget])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(li, "_class_", ["selected"]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(li, "_class_", ["selected"]);})]));
(function($rec){smalltalk.send($rec, "_with_", [(function(){smalltalk.send(smalltalk.send(html, "_span", []), "_class_", ["ltab"]);(function($rec){smalltalk.send($rec, "_class_", ["mtab"]);return smalltalk.send($rec, "_with_", [(function(){((($receiver = smalltalk.send(aWidget, "_canBeClosed", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (function($rec){smalltalk.send($rec, "_class_", ["close"]);smalltalk.send($rec, "_with_", ["x"]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_closeTab_", [aWidget]);})]);})(smalltalk.send(html, "_span", []));})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (function($rec){smalltalk.send($rec, "_class_", ["close"]);smalltalk.send($rec, "_with_", ["x"]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_closeTab_", [aWidget]);})]);})(smalltalk.send(html, "_span", []));})]));return smalltalk.send(smalltalk.send(html, "_span", []), "_with_", [smalltalk.send(self, "_labelFor_", [aWidget])]);})]);})(smalltalk.send(html, "_span", []));return smalltalk.send(smalltalk.send(html, "_span", []), "_class_", ["rtab"]);})]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_selectTab_", [aWidget]);})]);})(li);
return self;}
}),
smalltalk.TabManager);

smalltalk.addMethod(
unescape('_renderTabs'),
smalltalk.method({
selector: unescape('renderTabs'),
fn: function (){
var self=this;
smalltalk.send(self['@ul'], "_contents_", [(function(html){smalltalk.send(smalltalk.send(self, "_tabs", []), "_do_", [(function(each){return smalltalk.send(self, "_renderTabFor_on_", [each, html]);})]);return (function($rec){smalltalk.send($rec, "_class_", ["newtab"]);smalltalk.send($rec, "_with_", [(function(){smalltalk.send(smalltalk.send(html, "_span", []), "_class_", ["ltab"]);(function($rec){smalltalk.send($rec, "_class_", ["mtab"]);return smalltalk.send($rec, "_with_", [unescape("%20+%20")]);})(smalltalk.send(html, "_span", []));return smalltalk.send(smalltalk.send(html, "_span", []), "_class_", ["rtab"]);})]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_newBrowserTab", []);})]);})(smalltalk.send(html, "_li", []));})]);
return self;}
}),
smalltalk.TabManager);

smalltalk.addMethod(
unescape('_renderToolbarOn_'),
smalltalk.method({
selector: unescape('renderToolbarOn%3A'),
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_id_", ["jt_toolbar"]);return smalltalk.send($rec, "_with_", [(function(){(self['@input']=(function($rec){smalltalk.send($rec, "_class_", ["implementors"]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(html, "_input", [])));smalltalk.send(self['@input'], "_onKeyPress_", [(function(event){return ((($receiver = smalltalk.send(smalltalk.send(event, "_keyCode", []), "__eq", [(13)])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_search_", [smalltalk.send(smalltalk.send(self['@input'], "_asJQuery", []), "_val", [])]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(self, "_search_", [smalltalk.send(smalltalk.send(self['@input'], "_asJQuery", []), "_val", [])]);})]));})]);return (function($rec){smalltalk.send($rec, "_id_", ["jt_close"]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_close", []);})]);})(smalltalk.send(html, "_div", []));})]);})(smalltalk.send(html, "_div", []));
return self;}
}),
smalltalk.TabManager);

smalltalk.addMethod(
unescape('_update'),
smalltalk.method({
selector: unescape('update'),
fn: function (){
var self=this;
smalltalk.send(self, "_renderTabs", []);
return self;}
}),
smalltalk.TabManager);


smalltalk.TabManager.klass.iVarNames = ['current'];
smalltalk.addMethod(
unescape('_current'),
smalltalk.method({
selector: unescape('current'),
fn: function (){
var self=this;
return (($receiver = self['@current']) == nil || $receiver == undefined) ? (function(){return (self['@current']=smalltalk.send(self, "_new", [], smalltalk.Widget.klass));})() : $receiver;
return self;}
}),
smalltalk.TabManager.klass);

smalltalk.addMethod(
unescape('_new'),
smalltalk.method({
selector: unescape('new'),
fn: function (){
var self=this;
smalltalk.send(self, "_shouldNotImplement", []);
return self;}
}),
smalltalk.TabManager.klass);


smalltalk.addClass('TabWidget', smalltalk.Widget, ['div'], 'IDE');
smalltalk.addMethod(
unescape('_label'),
smalltalk.method({
selector: unescape('label'),
fn: function (){
var self=this;
smalltalk.send(self, "_subclassResponsibility", []);
return self;}
}),
smalltalk.TabWidget);

smalltalk.addMethod(
unescape('_open'),
smalltalk.method({
selector: unescape('open'),
fn: function (){
var self=this;
smalltalk.send(smalltalk.send((smalltalk.TabManager || TabManager), "_current", []), "_addTab_", [self]);
smalltalk.send(smalltalk.send((smalltalk.TabManager || TabManager), "_current", []), "_selectTab_", [self]);
return self;}
}),
smalltalk.TabWidget);

smalltalk.addMethod(
unescape('_show'),
smalltalk.method({
selector: unescape('show'),
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self['@div'], "_asJQuery", []), "_show", []);
return self;}
}),
smalltalk.TabWidget);

smalltalk.addMethod(
unescape('_hide'),
smalltalk.method({
selector: unescape('hide'),
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self['@div'], "_asJQuery", []), "_hide", []);
return self;}
}),
smalltalk.TabWidget);

smalltalk.addMethod(
unescape('_remove'),
smalltalk.method({
selector: unescape('remove'),
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self['@div'], "_asJQuery", []), "_remove", []);
return self;}
}),
smalltalk.TabWidget);

smalltalk.addMethod(
unescape('_close'),
smalltalk.method({
selector: unescape('close'),
fn: function (){
var self=this;
smalltalk.send(smalltalk.send((smalltalk.TabManager || TabManager), "_current", []), "_closeTab_", [self]);
return self;}
}),
smalltalk.TabWidget);

smalltalk.addMethod(
unescape('_renderOn_'),
smalltalk.method({
selector: unescape('renderOn%3A'),
fn: function (html){
var self=this;
(self['@div']=(function($rec){smalltalk.send($rec, "_class_", ["jtalkTool"]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(html, "_div", [])));
smalltalk.send(self, "_renderTab", []);
return self;}
}),
smalltalk.TabWidget);

smalltalk.addMethod(
unescape('_renderBoxOn_'),
smalltalk.method({
selector: unescape('renderBoxOn%3A'),
fn: function (html){
var self=this;

return self;}
}),
smalltalk.TabWidget);

smalltalk.addMethod(
unescape('_renderButtonsOn_'),
smalltalk.method({
selector: unescape('renderButtonsOn%3A'),
fn: function (html){
var self=this;

return self;}
}),
smalltalk.TabWidget);

smalltalk.addMethod(
unescape('_update'),
smalltalk.method({
selector: unescape('update'),
fn: function (){
var self=this;
smalltalk.send(self, "_renderTab", []);
return self;}
}),
smalltalk.TabWidget);

smalltalk.addMethod(
unescape('_renderTab'),
smalltalk.method({
selector: unescape('renderTab'),
fn: function (){
var self=this;
smalltalk.send(self['@div'], "_contents_", [(function(html){(function($rec){smalltalk.send($rec, "_class_", ["jt_box"]);return smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(self, "_renderBoxOn_", [html]);})]);})(smalltalk.send(html, "_div", []));return (function($rec){smalltalk.send($rec, "_class_", ["jt_buttons"]);return smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(self, "_renderButtonsOn_", [html]);})]);})(smalltalk.send(html, "_div", []));})]);
return self;}
}),
smalltalk.TabWidget);

smalltalk.addMethod(
unescape('_canBeClosed'),
smalltalk.method({
selector: unescape('canBeClosed'),
fn: function (){
var self=this;
return false;
return self;}
}),
smalltalk.TabWidget);


smalltalk.addMethod(
unescape('_open'),
smalltalk.method({
selector: unescape('open'),
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_new", []), "_open", []);
return self;}
}),
smalltalk.TabWidget.klass);


smalltalk.addClass('SourceArea', smalltalk.Widget, ['editor', 'div', 'receiver', 'onDoIt'], 'IDE');
smalltalk.addMethod(
unescape('_val'),
smalltalk.method({
selector: unescape('val'),
fn: function (){
var self=this;
return smalltalk.send(self['@editor'], "_getValue", []);
return self;}
}),
smalltalk.SourceArea);

smalltalk.addMethod(
unescape('_val_'),
smalltalk.method({
selector: unescape('val%3A'),
fn: function (aString){
var self=this;
smalltalk.send(self['@editor'], "_setValue_", [aString]);
return self;}
}),
smalltalk.SourceArea);

smalltalk.addMethod(
unescape('_currentLine'),
smalltalk.method({
selector: unescape('currentLine'),
fn: function (){
var self=this;
return smalltalk.send(self['@editor'], "_getLine_", [smalltalk.send(smalltalk.send(self['@editor'], "_getCursor", []), "_line", [])]);
return self;}
}),
smalltalk.SourceArea);

smalltalk.addMethod(
unescape('_selection'),
smalltalk.method({
selector: unescape('selection'),
fn: function (){
var self=this;
return smalltalk.send(self['@editor'], "_getSelection", []);
return self;}
}),
smalltalk.SourceArea);

smalltalk.addMethod(
unescape('_selectionEnd'),
smalltalk.method({
selector: unescape('selectionEnd'),
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send((typeof textarea == 'undefined' ? nil : textarea), "_element", []), "_selectionEnd", []);
return self;}
}),
smalltalk.SourceArea);

smalltalk.addMethod(
unescape('_selectionStart'),
smalltalk.method({
selector: unescape('selectionStart'),
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send((typeof textarea == 'undefined' ? nil : textarea), "_element", []), "_selectionStart", []);
return self;}
}),
smalltalk.SourceArea);

smalltalk.addMethod(
unescape('_selectionStart_'),
smalltalk.method({
selector: unescape('selectionStart%3A'),
fn: function (anInteger){
var self=this;
smalltalk.send(smalltalk.send((typeof textarea == 'undefined' ? nil : textarea), "_element", []), "_selectionStart_", [anInteger]);
return self;}
}),
smalltalk.SourceArea);

smalltalk.addMethod(
unescape('_selectionEnd_'),
smalltalk.method({
selector: unescape('selectionEnd%3A'),
fn: function (anInteger){
var self=this;
smalltalk.send(smalltalk.send((typeof textarea == 'undefined' ? nil : textarea), "_element", []), "_selectionEnd_", [anInteger]);
return self;}
}),
smalltalk.SourceArea);

smalltalk.addMethod(
unescape('_setEditorOn_'),
smalltalk.method({
selector: unescape('setEditorOn%3A'),
fn: function (aTextarea){
var self=this;
self['@editor'] = CodeMirror.fromTextArea(aTextarea, {
		theme: 'jtalk',
                lineNumbers: true,
                enterMode: 'flat',
                matchBrackets: true,
                electricChars: false
	});
return self;}
}),
smalltalk.SourceArea);

smalltalk.addMethod(
unescape('_editor'),
smalltalk.method({
selector: unescape('editor'),
fn: function (){
var self=this;
return self['@editor'];
return self;}
}),
smalltalk.SourceArea);

smalltalk.addMethod(
unescape('_receiver'),
smalltalk.method({
selector: unescape('receiver'),
fn: function (){
var self=this;
return (($receiver = self['@receiver']) == nil || $receiver == undefined) ? (function(){return smalltalk.send((smalltalk.DoIt || DoIt), "_new", []);})() : $receiver;
return self;}
}),
smalltalk.SourceArea);

smalltalk.addMethod(
unescape('_receiver_'),
smalltalk.method({
selector: unescape('receiver%3A'),
fn: function (anObject){
var self=this;
(self['@receiver']=anObject);
return self;}
}),
smalltalk.SourceArea);

smalltalk.addMethod(
unescape('_onDoIt_'),
smalltalk.method({
selector: unescape('onDoIt%3A'),
fn: function (aBlock){
var self=this;
(self['@onDoIt']=aBlock);
return self;}
}),
smalltalk.SourceArea);

smalltalk.addMethod(
unescape('_onDoIt'),
smalltalk.method({
selector: unescape('onDoIt'),
fn: function (){
var self=this;
return self['@onDoIt'];
return self;}
}),
smalltalk.SourceArea);

smalltalk.addMethod(
unescape('_currentLineOrSelection'),
smalltalk.method({
selector: unescape('currentLineOrSelection'),
fn: function (){
var self=this;
return ((($receiver = smalltalk.send(self['@editor'], "_somethingSelected", [])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(self, "_currentLine", []);})() : (function(){return smalltalk.send(self, "_selection", []);})()) : smalltalk.send($receiver, "_ifFalse_ifTrue_", [(function(){return smalltalk.send(self, "_currentLine", []);}), (function(){return smalltalk.send(self, "_selection", []);})]));
return self;}
}),
smalltalk.SourceArea);

smalltalk.addMethod(
unescape('_clear'),
smalltalk.method({
selector: unescape('clear'),
fn: function (){
var self=this;
smalltalk.send(self, "_val_", [""]);
return self;}
}),
smalltalk.SourceArea);

smalltalk.addMethod(
unescape('_doIt'),
smalltalk.method({
selector: unescape('doIt'),
fn: function (){
var self=this;
var result=nil;
(result=smalltalk.send(self, "_eval_", [smalltalk.send(self, "_currentLineOrSelection", [])]));
(($receiver = smalltalk.send(self, "_onDoIt", [])) != nil && $receiver != undefined) ? (function(){return smalltalk.send(smalltalk.send(self, "_onDoIt", []), "_value", []);})() : nil;
return result;
return self;}
}),
smalltalk.SourceArea);

smalltalk.addMethod(
unescape('_eval_'),
smalltalk.method({
selector: unescape('eval%3A'),
fn: function (aString){
var self=this;
try{var compiler=nil;
(compiler=smalltalk.send((smalltalk.Compiler || Compiler), "_new", []));
smalltalk.send((function(){return smalltalk.send(compiler, "_parseExpression_", [aString]);}), "_on_do_", [(smalltalk.Error || Error), (function(ex){return (function(){throw({name: 'stReturn', selector: '_eval_', fn: function(){return smalltalk.send((typeof window == 'undefined' ? nil : window), "_alert_", [smalltalk.send(ex, "_messageText", [])])}})})();})]);
(function(){throw({name: 'stReturn', selector: '_eval_', fn: function(){return smalltalk.send(smalltalk.send(smalltalk.send(compiler, "_load_forClass_", [smalltalk.send(smalltalk.send(unescape("doIt%20%5E%5B"), "__comma", [aString]), "__comma", [unescape("%5D%20value")]), (smalltalk.DoIt || DoIt)]), "_fn", []), "_applyTo_arguments_", [smalltalk.send(self, "_receiver", []), []])}})})();
return self;
} catch(e) {if(e.name === 'stReturn' && e.selector === '_eval_'){return e.fn()} throw(e)}}
}),
smalltalk.SourceArea);

smalltalk.addMethod(
unescape('_handleKeyDown_'),
smalltalk.method({
selector: unescape('handleKeyDown%3A'),
fn: function (anEvent){
var self=this;
if(anEvent.ctrlKey) {
		if(anEvent.keyCode === 80) { //ctrl+p
			self._printIt();
			anEvent.preventDefault();
			return false;
		}
		if(anEvent.keyCode === 68) { //ctrl+d
			self._doIt();
			anEvent.preventDefault();
			return false;
		}
		if(anEvent.keyCode === 73) { //ctrl+i
			self._inspectIt();
			anEvent.preventDefault();
			return false;
		}
	};
return self;}
}),
smalltalk.SourceArea);

smalltalk.addMethod(
unescape('_inspectIt'),
smalltalk.method({
selector: unescape('inspectIt'),
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self, "_doIt", []), "_inspect", []);
return self;}
}),
smalltalk.SourceArea);

smalltalk.addMethod(
unescape('_print_'),
smalltalk.method({
selector: unescape('print%3A'),
fn: function (aString){
var self=this;
var start=nil;
var stop=nil;
(start=smalltalk.send((smalltalk.HashedCollection || HashedCollection), "_new", []));
(stop=smalltalk.send((smalltalk.HashedCollection || HashedCollection), "_new", []));
smalltalk.send(start, "_at_put_", ["line", smalltalk.send(smalltalk.send(self['@editor'], "_getCursor_", [false]), "_line", [])]);
smalltalk.send(start, "_at_put_", ["ch", smalltalk.send(smalltalk.send(self['@editor'], "_getCursor_", [false]), "_ch", [])]);
smalltalk.send(stop, "_at_put_", ["line", smalltalk.send(start, "_at_", ["line"])]);
smalltalk.send(stop, "_at_put_", ["ch", ((($receiver = ((($receiver = smalltalk.send(start, "_at_", ["ch"])).klass === smalltalk.Number) ? $receiver +smalltalk.send(aString, "_size", []) : smalltalk.send($receiver, "__plus", [smalltalk.send(aString, "_size", [])]))).klass === smalltalk.Number) ? $receiver +(2) : smalltalk.send($receiver, "__plus", [(2)]))]);
smalltalk.send(self['@editor'], "_replaceSelection_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self['@editor'], "_getSelection", []), "__comma", [" "]), "__comma", [aString]), "__comma", [" "])]);
smalltalk.send(self['@editor'], "_setCursor_", [smalltalk.send(self['@editor'], "_getCursor_", [true])]);
smalltalk.send(self['@editor'], "_setSelection_end_", [stop, start]);
return self;}
}),
smalltalk.SourceArea);

smalltalk.addMethod(
unescape('_printIt'),
smalltalk.method({
selector: unescape('printIt'),
fn: function (){
var self=this;
smalltalk.send(self, "_print_", [smalltalk.send(smalltalk.send(self, "_doIt", []), "_printString", [])]);
return self;}
}),
smalltalk.SourceArea);

smalltalk.addMethod(
unescape('_fileIn'),
smalltalk.method({
selector: unescape('fileIn'),
fn: function (){
var self=this;
smalltalk.send(smalltalk.send((smalltalk.Importer || Importer), "_new", []), "_import_", [smalltalk.send(smalltalk.send(self, "_currentLineOrSelection", []), "_readStream", [])]);
return self;}
}),
smalltalk.SourceArea);

smalltalk.addMethod(
unescape('_onKeyUp_'),
smalltalk.method({
selector: unescape('onKeyUp%3A'),
fn: function (aBlock){
var self=this;
smalltalk.send(self['@div'], "_onKeyUp_", [aBlock]);
return self;}
}),
smalltalk.SourceArea);

smalltalk.addMethod(
unescape('_onKeyDown_'),
smalltalk.method({
selector: unescape('onKeyDown%3A'),
fn: function (aBlock){
var self=this;
smalltalk.send(self['@div'], "_onKeyDown_", [aBlock]);
return self;}
}),
smalltalk.SourceArea);

smalltalk.addMethod(
unescape('_renderOn_'),
smalltalk.method({
selector: unescape('renderOn%3A'),
fn: function (html){
var self=this;
var textarea=nil;
(self['@div']=smalltalk.send(smalltalk.send(html, "_div", []), "_class_", ["source"]));
smalltalk.send(self['@div'], "_with_", [(function(){return (textarea=smalltalk.send(html, "_textarea", []));})]);
smalltalk.send(self, "_setEditorOn_", [smalltalk.send(textarea, "_element", [])]);
smalltalk.send(self['@div'], "_onKeyDown_", [(function(e){return smalltalk.send(self, "_handleKeyDown_", [e]);})]);
return self;}
}),
smalltalk.SourceArea);



smalltalk.addClass('ClassesList', smalltalk.Widget, ['browser', 'ul', 'nodes'], 'IDE');
smalltalk.addMethod(
unescape('_category'),
smalltalk.method({
selector: unescape('category'),
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_browser", []), "_selectedPackage", []);
return self;}
}),
smalltalk.ClassesList);

smalltalk.addMethod(
unescape('_nodes'),
smalltalk.method({
selector: unescape('nodes'),
fn: function (){
var self=this;
(($receiver = self['@nodes']) == nil || $receiver == undefined) ? (function(){return (self['@nodes']=smalltalk.send(self, "_getNodes", []));})() : $receiver;
return self['@nodes'];
return self;}
}),
smalltalk.ClassesList);

smalltalk.addMethod(
unescape('_browser'),
smalltalk.method({
selector: unescape('browser'),
fn: function (){
var self=this;
return self['@browser'];
return self;}
}),
smalltalk.ClassesList);

smalltalk.addMethod(
unescape('_browser_'),
smalltalk.method({
selector: unescape('browser%3A'),
fn: function (aBrowser){
var self=this;
(self['@browser']=aBrowser);
return self;}
}),
smalltalk.ClassesList);

smalltalk.addMethod(
unescape('_getNodes'),
smalltalk.method({
selector: unescape('getNodes'),
fn: function (){
var self=this;
var classes=nil;
var children=nil;
var others=nil;
(classes=smalltalk.send(smalltalk.send(self, "_browser", []), "_classes", []));
(children=[]);
(others=[]);
smalltalk.send(classes, "_do_", [(function(each){return ((($receiver = smalltalk.send(classes, "_includes_", [smalltalk.send(each, "_superclass", [])])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(children, "_add_", [each]);})() : (function(){return smalltalk.send(others, "_add_", [each]);})()) : smalltalk.send($receiver, "_ifFalse_ifTrue_", [(function(){return smalltalk.send(children, "_add_", [each]);}), (function(){return smalltalk.send(others, "_add_", [each]);})]));})]);
return smalltalk.send(children, "_collect_", [(function(each){return smalltalk.send((smalltalk.ClassesListNode || ClassesListNode), "_on_browser_classes_level_", [each, smalltalk.send(self, "_browser", []), others, (0)]);})]);
return self;}
}),
smalltalk.ClassesList);

smalltalk.addMethod(
unescape('_resetNodes'),
smalltalk.method({
selector: unescape('resetNodes'),
fn: function (){
var self=this;
(self['@nodes']=nil);
return self;}
}),
smalltalk.ClassesList);

smalltalk.addMethod(
unescape('_renderOn_'),
smalltalk.method({
selector: unescape('renderOn%3A'),
fn: function (html){
var self=this;
(self['@ul']=(function($rec){smalltalk.send($rec, "_class_", ["jt_column browser classes"]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(html, "_ul", [])));
smalltalk.send(self, "_updateNodes", []);
return self;}
}),
smalltalk.ClassesList);

smalltalk.addMethod(
unescape('_updateNodes'),
smalltalk.method({
selector: unescape('updateNodes'),
fn: function (){
var self=this;
smalltalk.send(self['@ul'], "_contents_", [(function(html){return smalltalk.send(smalltalk.send(self, "_nodes", []), "_do_", [(function(each){return smalltalk.send(each, "_renderOn_", [html]);})]);})]);
return self;}
}),
smalltalk.ClassesList);


smalltalk.addMethod(
unescape('_on_'),
smalltalk.method({
selector: unescape('on%3A'),
fn: function (aBrowser){
var self=this;
return (function($rec){smalltalk.send($rec, "_browser_", [aBrowser]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;}
}),
smalltalk.ClassesList.klass);


smalltalk.addClass('ClassesListNode', smalltalk.Widget, ['browser', 'theClass', 'level', 'nodes'], 'IDE');
smalltalk.addMethod(
unescape('_renderOn_'),
smalltalk.method({
selector: unescape('renderOn%3A'),
fn: function (html){
var self=this;
var li=nil;
var cssClass=nil;
(cssClass="");
(li=smalltalk.send(smalltalk.send(html, "_li", []), "_onClick_", [(function(){return smalltalk.send(smalltalk.send(self, "_browser", []), "_selectClass_", [smalltalk.send(self, "_theClass", [])]);})]));
smalltalk.send(smalltalk.send(li, "_asJQuery", []), "_html_", [smalltalk.send(self, "_label", [])]);
((($receiver = smalltalk.send(smalltalk.send(smalltalk.send(self, "_browser", []), "_selectedClass", []), "__eq", [smalltalk.send(self, "_theClass", [])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (cssClass=smalltalk.send(cssClass, "__comma", [" selected"]));})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (cssClass=smalltalk.send(cssClass, "__comma", [" selected"]));})]));
((($receiver = smalltalk.send(smalltalk.send(smalltalk.send(self, "_theClass", []), "_comment", []), "_isEmpty", [])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return (cssClass=smalltalk.send(cssClass, "__comma", [" commented"]));})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return (cssClass=smalltalk.send(cssClass, "__comma", [" commented"]));})]));
smalltalk.send(li, "_class_", [cssClass]);
smalltalk.send(smalltalk.send(self, "_nodes", []), "_do_", [(function(each){return smalltalk.send(each, "_renderOn_", [html]);})]);
return self;}
}),
smalltalk.ClassesListNode);

smalltalk.addMethod(
unescape('_nodes'),
smalltalk.method({
selector: unescape('nodes'),
fn: function (){
var self=this;
return self['@nodes'];
return self;}
}),
smalltalk.ClassesListNode);

smalltalk.addMethod(
unescape('_theClass'),
smalltalk.method({
selector: unescape('theClass'),
fn: function (){
var self=this;
return self['@theClass'];
return self;}
}),
smalltalk.ClassesListNode);

smalltalk.addMethod(
unescape('_theClass_'),
smalltalk.method({
selector: unescape('theClass%3A'),
fn: function (aClass){
var self=this;
(self['@theClass']=aClass);
return self;}
}),
smalltalk.ClassesListNode);

smalltalk.addMethod(
unescape('_browser'),
smalltalk.method({
selector: unescape('browser'),
fn: function (){
var self=this;
return self['@browser'];
return self;}
}),
smalltalk.ClassesListNode);

smalltalk.addMethod(
unescape('_browser_'),
smalltalk.method({
selector: unescape('browser%3A'),
fn: function (aBrowser){
var self=this;
(self['@browser']=aBrowser);
return self;}
}),
smalltalk.ClassesListNode);

smalltalk.addMethod(
unescape('_level'),
smalltalk.method({
selector: unescape('level'),
fn: function (){
var self=this;
return self['@level'];
return self;}
}),
smalltalk.ClassesListNode);

smalltalk.addMethod(
unescape('_level_'),
smalltalk.method({
selector: unescape('level%3A'),
fn: function (anInteger){
var self=this;
(self['@level']=anInteger);
return self;}
}),
smalltalk.ClassesListNode);

smalltalk.addMethod(
unescape('_label'),
smalltalk.method({
selector: unescape('label'),
fn: function (){
var self=this;
var str=nil;
(str=smalltalk.send(smalltalk.send((smalltalk.String || String), "_new", []), "_writeStream", []));
smalltalk.send(smalltalk.send(self, "_level", []), "_timesRepeat_", [(function(){return smalltalk.send(str, "_nextPutAll_", [unescape("%26nbsp%3B%26nbsp%3B%26nbsp%3B%26nbsp%3B")]);})]);
smalltalk.send(str, "_nextPutAll_", [smalltalk.send(smalltalk.send(self, "_theClass", []), "_name", [])]);
return smalltalk.send(str, "_contents", []);
return self;}
}),
smalltalk.ClassesListNode);

smalltalk.addMethod(
unescape('_getNodesFrom_'),
smalltalk.method({
selector: unescape('getNodesFrom%3A'),
fn: function (aCollection){
var self=this;
var children=nil;
var others=nil;
(children=[]);
(others=[]);
smalltalk.send(aCollection, "_do_", [(function(each){return ((($receiver = smalltalk.send(smalltalk.send(each, "_superclass", []), "__eq", [smalltalk.send(self, "_theClass", [])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(children, "_add_", [each]);})() : (function(){return smalltalk.send(others, "_add_", [each]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(children, "_add_", [each]);}), (function(){return smalltalk.send(others, "_add_", [each]);})]));})]);
(self['@nodes']=smalltalk.send(children, "_collect_", [(function(each){return smalltalk.send((smalltalk.ClassesListNode || ClassesListNode), "_on_browser_classes_level_", [each, smalltalk.send(self, "_browser", []), others, ((($receiver = smalltalk.send(self, "_level", [])).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)]))]);})]));
return self;}
}),
smalltalk.ClassesListNode);


smalltalk.addMethod(
unescape('_on_browser_classes_level_'),
smalltalk.method({
selector: unescape('on%3Abrowser%3Aclasses%3Alevel%3A'),
fn: function (aClass, aBrowser, aCollection, anInteger){
var self=this;
return (function($rec){smalltalk.send($rec, "_theClass_", [aClass]);smalltalk.send($rec, "_browser_", [aBrowser]);smalltalk.send($rec, "_level_", [anInteger]);smalltalk.send($rec, "_getNodesFrom_", [aCollection]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;}
}),
smalltalk.ClassesListNode.klass);


smalltalk.addClass('DebugErrorHandler', smalltalk.ErrorHandler, [], 'IDE');
smalltalk.addMethod(
unescape('_handleError_'),
smalltalk.method({
selector: unescape('handleError%3A'),
fn: function (anError){
var self=this;
smalltalk.send((function(){return (function($rec){smalltalk.send($rec, "_error_", [anError]);return smalltalk.send($rec, "_open", []);})(smalltalk.send((smalltalk.Debugger || Debugger), "_new", []));}), "_on_do_", [(smalltalk.Error || Error), (function(error){return smalltalk.send(smalltalk.send((smalltalk.ErrorHandler || ErrorHandler), "_new", []), "_handleError_", [error]);})]);
return self;}
}),
smalltalk.DebugErrorHandler);


smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
fn: function (){
var self=this;
smalltalk.send(self, "_register", []);
return self;}
}),
smalltalk.DebugErrorHandler.klass);


smalltalk.addClass('Workspace', smalltalk.TabWidget, ['sourceArea'], 'IDE');
smalltalk.addMethod(
unescape('_label'),
smalltalk.method({
selector: unescape('label'),
fn: function (){
var self=this;
return "Workspace";
return self;}
}),
smalltalk.Workspace);

smalltalk.addMethod(
unescape('_clearWorkspace'),
smalltalk.method({
selector: unescape('clearWorkspace'),
fn: function (){
var self=this;
smalltalk.send(self['@sourceArea'], "_clear", []);
return self;}
}),
smalltalk.Workspace);

smalltalk.addMethod(
unescape('_doIt'),
smalltalk.method({
selector: unescape('doIt'),
fn: function (){
var self=this;
smalltalk.send(self['@sourceArea'], "_doIt", []);
return self;}
}),
smalltalk.Workspace);

smalltalk.addMethod(
unescape('_printIt'),
smalltalk.method({
selector: unescape('printIt'),
fn: function (){
var self=this;
smalltalk.send(self['@sourceArea'], "_printIt", []);
return self;}
}),
smalltalk.Workspace);

smalltalk.addMethod(
unescape('_inspectIt'),
smalltalk.method({
selector: unescape('inspectIt'),
fn: function (){
var self=this;
smalltalk.send(self['@sourceArea'], "_inspectIt", []);
return self;}
}),
smalltalk.Workspace);

smalltalk.addMethod(
unescape('_fileIn'),
smalltalk.method({
selector: unescape('fileIn'),
fn: function (){
var self=this;
smalltalk.send(self['@sourceArea'], "_fileIn", []);
return self;}
}),
smalltalk.Workspace);

smalltalk.addMethod(
unescape('_renderBoxOn_'),
smalltalk.method({
selector: unescape('renderBoxOn%3A'),
fn: function (html){
var self=this;
(self['@sourceArea']=smalltalk.send((smalltalk.SourceArea || SourceArea), "_new", []));
smalltalk.send(self['@sourceArea'], "_renderOn_", [html]);
return self;}
}),
smalltalk.Workspace);

smalltalk.addMethod(
unescape('_renderButtonsOn_'),
smalltalk.method({
selector: unescape('renderButtonsOn%3A'),
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_with_", ["DoIt"]);smalltalk.send($rec, "_title_", [unescape("ctrl+d")]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_doIt", []);})]);})(smalltalk.send(html, "_button", []));
(function($rec){smalltalk.send($rec, "_with_", ["PrintIt"]);smalltalk.send($rec, "_title_", [unescape("ctrl+p")]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_printIt", []);})]);})(smalltalk.send(html, "_button", []));
(function($rec){smalltalk.send($rec, "_with_", ["InspectIt"]);smalltalk.send($rec, "_title_", [unescape("ctrl+i")]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_inspectIt", []);})]);})(smalltalk.send(html, "_button", []));
(function($rec){smalltalk.send($rec, "_with_", ["FileIn"]);smalltalk.send($rec, "_title_", [unescape("ctrl+f")]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_fileIn", []);})]);})(smalltalk.send(html, "_button", []));
(function($rec){smalltalk.send($rec, "_with_", ["Clear workspace"]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_clearWorkspace", []);})]);})(smalltalk.send(html, "_button", []));
return self;}
}),
smalltalk.Workspace);



smalltalk.addClass('Browser', smalltalk.TabWidget, ['selectedPackage', 'selectedClass', 'selectedProtocol', 'selectedMethod', 'packagesList', 'classesList', 'protocolsList', 'methodsList', 'sourceArea', 'tabsList', 'selectedTab', 'saveButton', 'classButtons', 'methodButtons', 'unsavedChanges'], 'IDE');
smalltalk.addMethod(
unescape('_label'),
smalltalk.method({
selector: unescape('label'),
fn: function (){
var self=this;
return (($receiver = self['@selectedClass']) == nil || $receiver == undefined) ? (function(){return unescape("Browser%20%28nil%29");})() : (function(){return smalltalk.send("Browser: ", "__comma", [smalltalk.send(self['@selectedClass'], "_name", [])]);})();
return self;}
}),
smalltalk.Browser);

smalltalk.addMethod(
unescape('_packages'),
smalltalk.method({
selector: unescape('packages'),
fn: function (){
var self=this;
var packages=nil;
(packages=smalltalk.send((smalltalk.Array || Array), "_new", []));
smalltalk.send(smalltalk.send(smalltalk.send((smalltalk.Smalltalk || Smalltalk), "_current", []), "_classes", []), "_do_", [(function(each){return ((($receiver = smalltalk.send(packages, "_includes_", [smalltalk.send(each, "_category", [])])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(packages, "_add_", [smalltalk.send(each, "_category", [])]);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send(packages, "_add_", [smalltalk.send(each, "_category", [])]);})]));})]);
return smalltalk.send(packages, "_sort", []);
return self;}
}),
smalltalk.Browser);

smalltalk.addMethod(
unescape('_classes'),
smalltalk.method({
selector: unescape('classes'),
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send((smalltalk.Smalltalk || Smalltalk), "_current", []), "_classes", []), "_select_", [(function(each){return smalltalk.send(smalltalk.send(each, "_category", []), "__eq", [self['@selectedPackage']]);})]), "_sort_", [(function(a, b){return ((($receiver = smalltalk.send(a, "_name", [])).klass === smalltalk.Number) ? $receiver <smalltalk.send(b, "_name", []) : smalltalk.send($receiver, "__lt", [smalltalk.send(b, "_name", [])]));})]), "_asSet", []);
return self;}
}),
smalltalk.Browser);

smalltalk.addMethod(
unescape('_protocols'),
smalltalk.method({
selector: unescape('protocols'),
fn: function (){
var self=this;
try{var klass=nil;
(($receiver = self['@selectedClass']) != nil && $receiver != undefined) ? (function(){((($receiver = smalltalk.send(self['@selectedTab'], "__eq", [smalltalk.symbolFor("comment")])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (function(){throw({name: 'stReturn', selector: '_protocols', fn: function(){return []}})})();})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (function(){throw({name: 'stReturn', selector: '_protocols', fn: function(){return []}})})();})]));(klass=((($receiver = smalltalk.send(self['@selectedTab'], "__eq", [smalltalk.symbolFor("instance")])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return self['@selectedClass'];})() : (function(){return smalltalk.send(self['@selectedClass'], "_class", []);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return self['@selectedClass'];}), (function(){return smalltalk.send(self['@selectedClass'], "_class", []);})])));((($receiver = smalltalk.send(smalltalk.send(klass, "_methodDictionary", []), "_isEmpty", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (function(){throw({name: 'stReturn', selector: '_protocols', fn: function(){return smalltalk.send((smalltalk.Array || Array), "_with_", ["not yet classified"])}})})();})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (function(){throw({name: 'stReturn', selector: '_protocols', fn: function(){return smalltalk.send((smalltalk.Array || Array), "_with_", ["not yet classified"])}})})();})]));return (function(){throw({name: 'stReturn', selector: '_protocols', fn: function(){return smalltalk.send(klass, "_protocols", [])}})})();})() : nil;
(function(){throw({name: 'stReturn', selector: '_protocols', fn: function(){return smalltalk.send((smalltalk.Array || Array), "_new", [])}})})();
return self;
} catch(e) {if(e.name === 'stReturn' && e.selector === '_protocols'){return e.fn()} throw(e)}}
}),
smalltalk.Browser);

smalltalk.addMethod(
unescape('_methods'),
smalltalk.method({
selector: unescape('methods'),
fn: function (){
var self=this;
try{var klass=nil;
((($receiver = smalltalk.send(self['@selectedTab'], "__eq", [smalltalk.symbolFor("comment")])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (function(){throw({name: 'stReturn', selector: '_methods', fn: function(){return []}})})();})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (function(){throw({name: 'stReturn', selector: '_methods', fn: function(){return []}})})();})]));
(($receiver = self['@selectedClass']) != nil && $receiver != undefined) ? (function(){return (klass=((($receiver = smalltalk.send(self['@selectedTab'], "__eq", [smalltalk.symbolFor("instance")])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return self['@selectedClass'];})() : (function(){return smalltalk.send(self['@selectedClass'], "_class", []);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return self['@selectedClass'];}), (function(){return smalltalk.send(self['@selectedClass'], "_class", []);})])));})() : nil;
(function(){throw({name: 'stReturn', selector: '_methods', fn: function(){return smalltalk.send((($receiver = self['@selectedProtocol']) == nil || $receiver == undefined) ? (function(){return (($receiver = klass) == nil || $receiver == undefined) ? (function(){return [];})() : (function(){return smalltalk.send(smalltalk.send(klass, "_methodDictionary", []), "_values", []);})();})() : (function(){return smalltalk.send(smalltalk.send(smalltalk.send(klass, "_methodDictionary", []), "_values", []), "_select_", [(function(each){return smalltalk.send(smalltalk.send(each, "_category", []), "__eq", [self['@selectedProtocol']]);})]);})(), "_sort_", [(function(a, b){return ((($receiver = smalltalk.send(a, "_selector", [])).klass === smalltalk.Number) ? $receiver <smalltalk.send(b, "_selector", []) : smalltalk.send($receiver, "__lt", [smalltalk.send(b, "_selector", [])]));})])}})})();
return self;
} catch(e) {if(e.name === 'stReturn' && e.selector === '_methods'){return e.fn()} throw(e)}}
}),
smalltalk.Browser);

smalltalk.addMethod(
unescape('_source'),
smalltalk.method({
selector: unescape('source'),
fn: function (){
var self=this;
try{((($receiver = smalltalk.send(self['@selectedTab'], "__eq", [smalltalk.symbolFor("comment")])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return (function(){throw({name: 'stReturn', selector: '_source', fn: function(){return ((($receiver = smalltalk.send(smalltalk.send(self['@selectedProtocol'], "_notNil", []), "_or_", [(function(){return smalltalk.send(self['@selectedMethod'], "_notNil", []);})])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(self, "_declarationSource", []);})() : (function(){return smalltalk.send(self, "_methodSource", []);})()) : smalltalk.send($receiver, "_ifFalse_ifTrue_", [(function(){return smalltalk.send(self, "_declarationSource", []);}), (function(){return smalltalk.send(self, "_methodSource", []);})]))}})})();})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return (function(){throw({name: 'stReturn', selector: '_source', fn: function(){return ((($receiver = smalltalk.send(smalltalk.send(self['@selectedProtocol'], "_notNil", []), "_or_", [(function(){return smalltalk.send(self['@selectedMethod'], "_notNil", []);})])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(self, "_declarationSource", []);})() : (function(){return smalltalk.send(self, "_methodSource", []);})()) : smalltalk.send($receiver, "_ifFalse_ifTrue_", [(function(){return smalltalk.send(self, "_declarationSource", []);}), (function(){return smalltalk.send(self, "_methodSource", []);})]))}})})();})]));
(function(){throw({name: 'stReturn', selector: '_source', fn: function(){return (($receiver = self['@selectedClass']) == nil || $receiver == undefined) ? (function(){return "";})() : (function(){return smalltalk.send(self, "_classCommentSource", []);})()}})})();
return self;
} catch(e) {if(e.name === 'stReturn' && e.selector === '_source'){return e.fn()} throw(e)}}
}),
smalltalk.Browser);

smalltalk.addMethod(
unescape('_methodSource'),
smalltalk.method({
selector: unescape('methodSource'),
fn: function (){
var self=this;
return (($receiver = self['@selectedMethod']) == nil || $receiver == undefined) ? (function(){return smalltalk.send(self, "_dummyMethodSource", []);})() : (function(){return smalltalk.send(self['@selectedMethod'], "_source", []);})();
return self;}
}),
smalltalk.Browser);

smalltalk.addMethod(
unescape('_dummyMethodSource'),
smalltalk.method({
selector: unescape('dummyMethodSource'),
fn: function (){
var self=this;
return unescape("messageSelectorAndArgumentNames%0A%09%22comment%20stating%20purpose%20of%20message%22%0A%0A%09%7C%20temporary%20variable%20names%20%7C%0A%09statements");
return self;}
}),
smalltalk.Browser);

smalltalk.addMethod(
unescape('_declarationSource'),
smalltalk.method({
selector: unescape('declarationSource'),
fn: function (){
var self=this;
return ((($receiver = smalltalk.send(self['@selectedTab'], "__eq", [smalltalk.symbolFor("instance")])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_classDeclarationSource", []);})() : (function(){return smalltalk.send(self, "_metaclassDeclarationSource", []);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self, "_classDeclarationSource", []);}), (function(){return smalltalk.send(self, "_metaclassDeclarationSource", []);})]));
return self;}
}),
smalltalk.Browser);

smalltalk.addMethod(
unescape('_classDeclarationSource'),
smalltalk.method({
selector: unescape('classDeclarationSource'),
fn: function (){
var self=this;
try{var stream=nil;
(stream=smalltalk.send("", "_writeStream", []));
(($receiver = self['@selectedClass']) == nil || $receiver == undefined) ? (function(){return (function(){throw({name: 'stReturn', selector: '_classDeclarationSource', fn: function(){return smalltalk.send(self, "_classDeclarationTemplate", [])}})})();})() : $receiver;
(function($rec){smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send(self['@selectedClass'], "_superclass", []), "_asString", [])]);smalltalk.send($rec, "_nextPutAll_", [unescape("%20subclass%3A%20%23")]);smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(self['@selectedClass'], "_name", [])]);smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send((smalltalk.String || String), "_lf", []), "__comma", [smalltalk.send((smalltalk.String || String), "_tab", [])])]);return smalltalk.send($rec, "_nextPutAll_", [unescape("instanceVariableNames%3A%20%27")]);})(stream);
smalltalk.send(smalltalk.send(self['@selectedClass'], "_instanceVariableNames", []), "_do_separatedBy_", [(function(each){return smalltalk.send(stream, "_nextPutAll_", [each]);}), (function(){return smalltalk.send(stream, "_nextPutAll_", [" "]);})]);
(function($rec){smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send(unescape("%27"), "__comma", [smalltalk.send((smalltalk.String || String), "_lf", [])]), "__comma", [smalltalk.send((smalltalk.String || String), "_tab", [])])]);smalltalk.send($rec, "_nextPutAll_", [unescape("package%3A%20%27")]);smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(self['@selectedClass'], "_category", [])]);return smalltalk.send($rec, "_nextPutAll_", [unescape("%27")]);})(stream);
(function(){throw({name: 'stReturn', selector: '_classDeclarationSource', fn: function(){return smalltalk.send(stream, "_contents", [])}})})();
return self;
} catch(e) {if(e.name === 'stReturn' && e.selector === '_classDeclarationSource'){return e.fn()} throw(e)}}
}),
smalltalk.Browser);

smalltalk.addMethod(
unescape('_metaclassDeclarationSource'),
smalltalk.method({
selector: unescape('metaclassDeclarationSource'),
fn: function (){
var self=this;
var stream=nil;
(stream=smalltalk.send("", "_writeStream", []));
(($receiver = self['@selectedClass']) != nil && $receiver != undefined) ? (function(){(function($rec){smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(self['@selectedClass'], "_asString", [])]);smalltalk.send($rec, "_nextPutAll_", [" class "]);return smalltalk.send($rec, "_nextPutAll_", [unescape("instanceVariableNames%3A%20%27")]);})(stream);smalltalk.send(smalltalk.send(smalltalk.send(self['@selectedClass'], "_class", []), "_instanceVariableNames", []), "_do_separatedBy_", [(function(each){return smalltalk.send(stream, "_nextPutAll_", [each]);}), (function(){return smalltalk.send(stream, "_nextPutAll_", [" "]);})]);return smalltalk.send(stream, "_nextPutAll_", [unescape("%27")]);})() : nil;
return smalltalk.send(stream, "_contents", []);
return self;}
}),
smalltalk.Browser);

smalltalk.addMethod(
unescape('_classCommentSource'),
smalltalk.method({
selector: unescape('classCommentSource'),
fn: function (){
var self=this;
return smalltalk.send(self['@selectedClass'], "_comment", []);
return self;}
}),
smalltalk.Browser);

smalltalk.addMethod(
unescape('_selectedClass'),
smalltalk.method({
selector: unescape('selectedClass'),
fn: function (){
var self=this;
return self['@selectedClass'];
return self;}
}),
smalltalk.Browser);

smalltalk.addMethod(
unescape('_classDeclarationTemplate'),
smalltalk.method({
selector: unescape('classDeclarationTemplate'),
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(unescape("Object%20subclass%3A%20%23NameOfSubclass%0A%09instanceVariableNames%3A%20%27%27%0A%09package%3A%20%27"), "__comma", [smalltalk.send(self, "_selectedPackage", [])]), "__comma", [unescape("%27")]);
return self;}
}),
smalltalk.Browser);

smalltalk.addMethod(
unescape('_selectedPackage'),
smalltalk.method({
selector: unescape('selectedPackage'),
fn: function (){
var self=this;
return self['@selectedPackage'];
return self;}
}),
smalltalk.Browser);

smalltalk.addMethod(
unescape('_disableSaveButton'),
smalltalk.method({
selector: unescape('disableSaveButton'),
fn: function (){
var self=this;
(($receiver = self['@saveButton']) != nil && $receiver != undefined) ? (function(){return smalltalk.send(self['@saveButton'], "_at_put_", ["disabled", true]);})() : nil;
(self['@unsavedChanges']=false);
return self;}
}),
smalltalk.Browser);

smalltalk.addMethod(
unescape('_hideClassButtons'),
smalltalk.method({
selector: unescape('hideClassButtons'),
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self['@classButtons'], "_asJQuery", []), "_hide", []);
return self;}
}),
smalltalk.Browser);

smalltalk.addMethod(
unescape('_showClassButtons'),
smalltalk.method({
selector: unescape('showClassButtons'),
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self['@classButtons'], "_asJQuery", []), "_show", []);
return self;}
}),
smalltalk.Browser);

smalltalk.addMethod(
unescape('_hideMethodButtons'),
smalltalk.method({
selector: unescape('hideMethodButtons'),
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self['@methodButtons'], "_asJQuery", []), "_hide", []);
return self;}
}),
smalltalk.Browser);

smalltalk.addMethod(
unescape('_showMethodButtons'),
smalltalk.method({
selector: unescape('showMethodButtons'),
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self['@methodButtons'], "_asJQuery", []), "_show", []);
return self;}
}),
smalltalk.Browser);

smalltalk.addMethod(
unescape('_compile'),
smalltalk.method({
selector: unescape('compile'),
fn: function (){
var self=this;
smalltalk.send(self, "_disableSaveButton", []);
((($receiver = smalltalk.send(self['@selectedTab'], "__eq", [smalltalk.symbolFor("comment")])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (($receiver = self['@selectedClass']) != nil && $receiver != undefined) ? (function(){return smalltalk.send(self, "_compileClassComment", []);})() : nil;})() : (function(){return ((($receiver = smalltalk.send(smalltalk.send(self['@selectedProtocol'], "_notNil", []), "_or_", [(function(){return smalltalk.send(self['@selectedMethod'], "_notNil", []);})])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(self, "_compileDefinition", []);})() : (function(){return smalltalk.send(self, "_compileMethodDefinition", []);})()) : smalltalk.send($receiver, "_ifFalse_ifTrue_", [(function(){return smalltalk.send(self, "_compileDefinition", []);}), (function(){return smalltalk.send(self, "_compileMethodDefinition", []);})]));})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return (($receiver = self['@selectedClass']) != nil && $receiver != undefined) ? (function(){return smalltalk.send(self, "_compileClassComment", []);})() : nil;}), (function(){return ((($receiver = smalltalk.send(smalltalk.send(self['@selectedProtocol'], "_notNil", []), "_or_", [(function(){return smalltalk.send(self['@selectedMethod'], "_notNil", []);})])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(self, "_compileDefinition", []);})() : (function(){return smalltalk.send(self, "_compileMethodDefinition", []);})()) : smalltalk.send($receiver, "_ifFalse_ifTrue_", [(function(){return smalltalk.send(self, "_compileDefinition", []);}), (function(){return smalltalk.send(self, "_compileMethodDefinition", []);})]));})]));
return self;}
}),
smalltalk.Browser);

smalltalk.addMethod(
unescape('_compileClassComment'),
smalltalk.method({
selector: unescape('compileClassComment'),
fn: function (){
var self=this;
smalltalk.send(self['@selectedClass'], "_comment_", [smalltalk.send(self['@sourceArea'], "_val", [])]);
return self;}
}),
smalltalk.Browser);

smalltalk.addMethod(
unescape('_compileMethodDefinition'),
smalltalk.method({
selector: unescape('compileMethodDefinition'),
fn: function (){
var self=this;
((($receiver = smalltalk.send(self['@selectedTab'], "__eq", [smalltalk.symbolFor("instance")])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_compileMethodDefinitionFor_", [self['@selectedClass']]);})() : (function(){return smalltalk.send(self, "_compileMethodDefinitionFor_", [smalltalk.send(self['@selectedClass'], "_class", [])]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self, "_compileMethodDefinitionFor_", [self['@selectedClass']]);}), (function(){return smalltalk.send(self, "_compileMethodDefinitionFor_", [smalltalk.send(self['@selectedClass'], "_class", [])]);})]));
return self;}
}),
smalltalk.Browser);

smalltalk.addMethod(
unescape('_compileMethodDefinitionFor_'),
smalltalk.method({
selector: unescape('compileMethodDefinitionFor%3A'),
fn: function (aClass){
var self=this;
try{var compiler=nil;
var method=nil;
var source=nil;
var node=nil;
(source=smalltalk.send(self['@sourceArea'], "_val", []));
(($receiver = self['@selectedProtocol']) == nil || $receiver == undefined) ? (function(){return (self['@selectedProtocol']=smalltalk.send(self['@selectedMethod'], "_category", []));})() : $receiver;
(compiler=smalltalk.send((smalltalk.Compiler || Compiler), "_new", []));
smalltalk.send(compiler, "_source_", [source]);
(node=smalltalk.send(compiler, "_parse_", [source]));
((($receiver = smalltalk.send(node, "_isParseFailure", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (function(){throw({name: 'stReturn', selector: '_compileMethodDefinitionFor_', fn: function(){return smalltalk.send((typeof window == 'undefined' ? nil : window), "_alert_", [smalltalk.send(smalltalk.send(smalltalk.send("PARSE ERROR: ", "__comma", [smalltalk.send(node, "_reason", [])]), "__comma", [unescape("%2C%20position%3A%20")]), "__comma", [smalltalk.send(smalltalk.send(node, "_position", []), "_asString", [])])])}})})();})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (function(){throw({name: 'stReturn', selector: '_compileMethodDefinitionFor_', fn: function(){return smalltalk.send((typeof window == 'undefined' ? nil : window), "_alert_", [smalltalk.send(smalltalk.send(smalltalk.send("PARSE ERROR: ", "__comma", [smalltalk.send(node, "_reason", [])]), "__comma", [unescape("%2C%20position%3A%20")]), "__comma", [smalltalk.send(smalltalk.send(node, "_position", []), "_asString", [])])])}})})();})]));
smalltalk.send(compiler, "_currentClass_", [aClass]);
(method=smalltalk.send(compiler, "_eval_", [smalltalk.send(compiler, "_compileNode_", [node])]));
smalltalk.send(method, "_category_", [self['@selectedProtocol']]);
smalltalk.send(smalltalk.send(compiler, "_unknownVariables", []), "_do_", [(function(each){return (($receiver = smalltalk.send((typeof window == 'undefined' ? nil : window), "_at_", [each])) == nil || $receiver == undefined) ? (function(){return ((($receiver = smalltalk.send((typeof window == 'undefined' ? nil : window), "_confirm_", [smalltalk.send(smalltalk.send(unescape("Declare%20%27"), "__comma", [each]), "__comma", [unescape("%27%20as%20instance%20variable%3F")])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_addInstanceVariableNamed_toClass_", [each, aClass]);return (function(){throw({name: 'stReturn', selector: '_compileMethodDefinitionFor_', fn: function(){return smalltalk.send(self, "_compileMethodDefinitionFor_", [aClass])}})})();})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self, "_addInstanceVariableNamed_toClass_", [each, aClass]);return (function(){throw({name: 'stReturn', selector: '_compileMethodDefinitionFor_', fn: function(){return smalltalk.send(self, "_compileMethodDefinitionFor_", [aClass])}})})();})]));})() : $receiver;})]);
smalltalk.send(aClass, "_addCompiledMethod_", [method]);
smalltalk.send(compiler, "_setupClass_", [aClass]);
smalltalk.send(self, "_updateMethodsList", []);
smalltalk.send(self, "_selectMethod_", [method]);
return self;
} catch(e) {if(e.name === 'stReturn' && e.selector === '_compileMethodDefinitionFor_'){return e.fn()} throw(e)}}
}),
smalltalk.Browser);

smalltalk.addMethod(
unescape('_compileDefinition'),
smalltalk.method({
selector: unescape('compileDefinition'),
fn: function (){
var self=this;
var newClass=nil;
(newClass=smalltalk.send(smalltalk.send((smalltalk.Compiler || Compiler), "_new", []), "_loadExpression_", [smalltalk.send(self['@sourceArea'], "_val", [])]));
(function($rec){smalltalk.send($rec, "_resetClassesList", []);smalltalk.send($rec, "_updateCategoriesList", []);return smalltalk.send($rec, "_updateClassesList", []);})(self);
smalltalk.send(self, "_selectClass_", [newClass]);
return self;}
}),
smalltalk.Browser);

smalltalk.addMethod(
unescape('_cancelChanges'),
smalltalk.method({
selector: unescape('cancelChanges'),
fn: function (){
var self=this;
return ((($receiver = self['@unsavedChanges']).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send((typeof window == 'undefined' ? nil : window), "_confirm_", [unescape("Cancel%20changes%3F")]);})() : (function(){return true;})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send((typeof window == 'undefined' ? nil : window), "_confirm_", [unescape("Cancel%20changes%3F")]);}), (function(){return true;})]));
return self;}
}),
smalltalk.Browser);

smalltalk.addMethod(
unescape('_removeClass'),
smalltalk.method({
selector: unescape('removeClass'),
fn: function (){
var self=this;
((($receiver = smalltalk.send((typeof window == 'undefined' ? nil : window), "_confirm_", [smalltalk.send(smalltalk.send("Do you really want to remove ", "__comma", [smalltalk.send(self['@selectedClass'], "_name", [])]), "__comma", [unescape("%3F")])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(smalltalk.send((smalltalk.Smalltalk || Smalltalk), "_current", []), "_removeClass_", [self['@selectedClass']]);smalltalk.send(self, "_resetClassesList", []);return smalltalk.send(self, "_selectClass_", [nil]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(smalltalk.send((smalltalk.Smalltalk || Smalltalk), "_current", []), "_removeClass_", [self['@selectedClass']]);smalltalk.send(self, "_resetClassesList", []);return smalltalk.send(self, "_selectClass_", [nil]);})]));
return self;}
}),
smalltalk.Browser);

smalltalk.addMethod(
unescape('_removeMethod'),
smalltalk.method({
selector: unescape('removeMethod'),
fn: function (){
var self=this;
((($receiver = smalltalk.send(self, "_cancelChanges", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return ((($receiver = smalltalk.send((typeof window == 'undefined' ? nil : window), "_confirm_", [smalltalk.send(smalltalk.send(unescape("Do%20you%20really%20want%20to%20remove%20%23"), "__comma", [smalltalk.send(self['@selectedMethod'], "_selector", [])]), "__comma", [unescape("%3F")])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){((($receiver = smalltalk.send(self['@selectedTab'], "__eq", [smalltalk.symbolFor("instance")])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self['@selectedClass'], "_removeCompiledMethod_", [self['@selectedMethod']]);})() : (function(){return smalltalk.send(smalltalk.send(self['@selectedClass'], "_class", []), "_removeCompiledMethod_", [self['@selectedMethod']]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self['@selectedClass'], "_removeCompiledMethod_", [self['@selectedMethod']]);}), (function(){return smalltalk.send(smalltalk.send(self['@selectedClass'], "_class", []), "_removeCompiledMethod_", [self['@selectedMethod']]);})]));return smalltalk.send(self, "_selectMethod_", [nil]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){((($receiver = smalltalk.send(self['@selectedTab'], "__eq", [smalltalk.symbolFor("instance")])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self['@selectedClass'], "_removeCompiledMethod_", [self['@selectedMethod']]);})() : (function(){return smalltalk.send(smalltalk.send(self['@selectedClass'], "_class", []), "_removeCompiledMethod_", [self['@selectedMethod']]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self['@selectedClass'], "_removeCompiledMethod_", [self['@selectedMethod']]);}), (function(){return smalltalk.send(smalltalk.send(self['@selectedClass'], "_class", []), "_removeCompiledMethod_", [self['@selectedMethod']]);})]));return smalltalk.send(self, "_selectMethod_", [nil]);})]));})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return ((($receiver = smalltalk.send((typeof window == 'undefined' ? nil : window), "_confirm_", [smalltalk.send(smalltalk.send(unescape("Do%20you%20really%20want%20to%20remove%20%23"), "__comma", [smalltalk.send(self['@selectedMethod'], "_selector", [])]), "__comma", [unescape("%3F")])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){((($receiver = smalltalk.send(self['@selectedTab'], "__eq", [smalltalk.symbolFor("instance")])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self['@selectedClass'], "_removeCompiledMethod_", [self['@selectedMethod']]);})() : (function(){return smalltalk.send(smalltalk.send(self['@selectedClass'], "_class", []), "_removeCompiledMethod_", [self['@selectedMethod']]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self['@selectedClass'], "_removeCompiledMethod_", [self['@selectedMethod']]);}), (function(){return smalltalk.send(smalltalk.send(self['@selectedClass'], "_class", []), "_removeCompiledMethod_", [self['@selectedMethod']]);})]));return smalltalk.send(self, "_selectMethod_", [nil]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){((($receiver = smalltalk.send(self['@selectedTab'], "__eq", [smalltalk.symbolFor("instance")])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self['@selectedClass'], "_removeCompiledMethod_", [self['@selectedMethod']]);})() : (function(){return smalltalk.send(smalltalk.send(self['@selectedClass'], "_class", []), "_removeCompiledMethod_", [self['@selectedMethod']]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self['@selectedClass'], "_removeCompiledMethod_", [self['@selectedMethod']]);}), (function(){return smalltalk.send(smalltalk.send(self['@selectedClass'], "_class", []), "_removeCompiledMethod_", [self['@selectedMethod']]);})]));return smalltalk.send(self, "_selectMethod_", [nil]);})]));})]));
return self;}
}),
smalltalk.Browser);

smalltalk.addMethod(
unescape('_setMethodProtocol_'),
smalltalk.method({
selector: unescape('setMethodProtocol%3A'),
fn: function (aString){
var self=this;
((($receiver = smalltalk.send(self, "_cancelChanges", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return ((($receiver = smalltalk.send(smalltalk.send(self, "_protocols", []), "_includes_", [aString])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(self, "_addNewProtocol", []);})() : (function(){smalltalk.send(self['@selectedMethod'], "_category_", [aString]);(self['@selectedProtocol']=aString);(self['@selectedMethod']=self['@selectedMethod']);return (function($rec){smalltalk.send($rec, "_updateProtocolsList", []);smalltalk.send($rec, "_updateMethodsList", []);return smalltalk.send($rec, "_updateSourceAndButtons", []);})(self);})()) : smalltalk.send($receiver, "_ifFalse_ifTrue_", [(function(){return smalltalk.send(self, "_addNewProtocol", []);}), (function(){smalltalk.send(self['@selectedMethod'], "_category_", [aString]);(self['@selectedProtocol']=aString);(self['@selectedMethod']=self['@selectedMethod']);return (function($rec){smalltalk.send($rec, "_updateProtocolsList", []);smalltalk.send($rec, "_updateMethodsList", []);return smalltalk.send($rec, "_updateSourceAndButtons", []);})(self);})]));})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return ((($receiver = smalltalk.send(smalltalk.send(self, "_protocols", []), "_includes_", [aString])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(self, "_addNewProtocol", []);})() : (function(){smalltalk.send(self['@selectedMethod'], "_category_", [aString]);(self['@selectedProtocol']=aString);(self['@selectedMethod']=self['@selectedMethod']);return (function($rec){smalltalk.send($rec, "_updateProtocolsList", []);smalltalk.send($rec, "_updateMethodsList", []);return smalltalk.send($rec, "_updateSourceAndButtons", []);})(self);})()) : smalltalk.send($receiver, "_ifFalse_ifTrue_", [(function(){return smalltalk.send(self, "_addNewProtocol", []);}), (function(){smalltalk.send(self['@selectedMethod'], "_category_", [aString]);(self['@selectedProtocol']=aString);(self['@selectedMethod']=self['@selectedMethod']);return (function($rec){smalltalk.send($rec, "_updateProtocolsList", []);smalltalk.send($rec, "_updateMethodsList", []);return smalltalk.send($rec, "_updateSourceAndButtons", []);})(self);})]));})]));
return self;}
}),
smalltalk.Browser);

smalltalk.addMethod(
unescape('_addNewProtocol'),
smalltalk.method({
selector: unescape('addNewProtocol'),
fn: function (){
var self=this;
var newProtocol=nil;
(newProtocol=smalltalk.send((typeof window == 'undefined' ? nil : window), "_prompt_", ["New method protocol"]));
((($receiver = smalltalk.send(smalltalk.send(newProtocol, "_notNil", []), "_and_", [(function(){return smalltalk.send(newProtocol, "_notEmpty", []);})])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self['@selectedMethod'], "_category_", [newProtocol]);return smalltalk.send(self, "_setMethodProtocol_", [newProtocol]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self['@selectedMethod'], "_category_", [newProtocol]);return smalltalk.send(self, "_setMethodProtocol_", [newProtocol]);})]));
return self;}
}),
smalltalk.Browser);

smalltalk.addMethod(
unescape('_selectCategory_'),
smalltalk.method({
selector: unescape('selectCategory%3A'),
fn: function (aCategory){
var self=this;
((($receiver = smalltalk.send(self, "_cancelChanges", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){(self['@selectedPackage']=aCategory);(self['@selectedClass']=(self['@selectedProtocol']=(self['@selectedMethod']=nil)));smalltalk.send(self, "_resetClassesList", []);return (function($rec){smalltalk.send($rec, "_updateCategoriesList", []);smalltalk.send($rec, "_updateClassesList", []);smalltalk.send($rec, "_updateProtocolsList", []);smalltalk.send($rec, "_updateMethodsList", []);return smalltalk.send($rec, "_updateSourceAndButtons", []);})(self);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){(self['@selectedPackage']=aCategory);(self['@selectedClass']=(self['@selectedProtocol']=(self['@selectedMethod']=nil)));smalltalk.send(self, "_resetClassesList", []);return (function($rec){smalltalk.send($rec, "_updateCategoriesList", []);smalltalk.send($rec, "_updateClassesList", []);smalltalk.send($rec, "_updateProtocolsList", []);smalltalk.send($rec, "_updateMethodsList", []);return smalltalk.send($rec, "_updateSourceAndButtons", []);})(self);})]));
return self;}
}),
smalltalk.Browser);

smalltalk.addMethod(
unescape('_selectClass_'),
smalltalk.method({
selector: unescape('selectClass%3A'),
fn: function (aClass){
var self=this;
((($receiver = smalltalk.send(self, "_cancelChanges", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){(self['@selectedClass']=aClass);(self['@selectedProtocol']=(self['@selectedMethod']=nil));return (function($rec){smalltalk.send($rec, "_updateClassesList", []);smalltalk.send($rec, "_updateProtocolsList", []);smalltalk.send($rec, "_updateMethodsList", []);return smalltalk.send($rec, "_updateSourceAndButtons", []);})(self);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){(self['@selectedClass']=aClass);(self['@selectedProtocol']=(self['@selectedMethod']=nil));return (function($rec){smalltalk.send($rec, "_updateClassesList", []);smalltalk.send($rec, "_updateProtocolsList", []);smalltalk.send($rec, "_updateMethodsList", []);return smalltalk.send($rec, "_updateSourceAndButtons", []);})(self);})]));
return self;}
}),
smalltalk.Browser);

smalltalk.addMethod(
unescape('_selectProtocol_'),
smalltalk.method({
selector: unescape('selectProtocol%3A'),
fn: function (aString){
var self=this;
((($receiver = smalltalk.send(self, "_cancelChanges", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){(self['@selectedProtocol']=aString);(self['@selectedMethod']=nil);return (function($rec){smalltalk.send($rec, "_updateProtocolsList", []);smalltalk.send($rec, "_updateMethodsList", []);return smalltalk.send($rec, "_updateSourceAndButtons", []);})(self);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){(self['@selectedProtocol']=aString);(self['@selectedMethod']=nil);return (function($rec){smalltalk.send($rec, "_updateProtocolsList", []);smalltalk.send($rec, "_updateMethodsList", []);return smalltalk.send($rec, "_updateSourceAndButtons", []);})(self);})]));
return self;}
}),
smalltalk.Browser);

smalltalk.addMethod(
unescape('_selectMethod_'),
smalltalk.method({
selector: unescape('selectMethod%3A'),
fn: function (aMethod){
var self=this;
((($receiver = smalltalk.send(self, "_cancelChanges", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){(self['@selectedMethod']=aMethod);return (function($rec){smalltalk.send($rec, "_updateProtocolsList", []);smalltalk.send($rec, "_updateMethodsList", []);return smalltalk.send($rec, "_updateSourceAndButtons", []);})(self);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){(self['@selectedMethod']=aMethod);return (function($rec){smalltalk.send($rec, "_updateProtocolsList", []);smalltalk.send($rec, "_updateMethodsList", []);return smalltalk.send($rec, "_updateSourceAndButtons", []);})(self);})]));
return self;}
}),
smalltalk.Browser);

smalltalk.addMethod(
unescape('_selectTab_'),
smalltalk.method({
selector: unescape('selectTab%3A'),
fn: function (aString){
var self=this;
((($receiver = smalltalk.send(self, "_cancelChanges", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){(self['@selectedTab']=aString);smalltalk.send(self, "_selectProtocol_", [nil]);return smalltalk.send(self, "_updateTabsList", []);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){(self['@selectedTab']=aString);smalltalk.send(self, "_selectProtocol_", [nil]);return smalltalk.send(self, "_updateTabsList", []);})]));
return self;}
}),
smalltalk.Browser);

smalltalk.addMethod(
unescape('_renameClass'),
smalltalk.method({
selector: unescape('renameClass'),
fn: function (){
var self=this;
var newName=nil;
(newName=smalltalk.send((typeof window == 'undefined' ? nil : window), "_prompt_", [smalltalk.send("Rename class ", "__comma", [smalltalk.send(self['@selectedClass'], "_name", [])])]));
((($receiver = smalltalk.send(smalltalk.send(newName, "_notNil", []), "_and_", [(function(){return smalltalk.send(newName, "_notEmpty", []);})])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self['@selectedClass'], "_rename_", [newName]);return (function($rec){smalltalk.send($rec, "_updateClassesList", []);return smalltalk.send($rec, "_updateSourceAndButtons", []);})(self);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self['@selectedClass'], "_rename_", [newName]);return (function($rec){smalltalk.send($rec, "_updateClassesList", []);return smalltalk.send($rec, "_updateSourceAndButtons", []);})(self);})]));
return self;}
}),
smalltalk.Browser);

smalltalk.addMethod(
unescape('_addInstanceVariableNamed_toClass_'),
smalltalk.method({
selector: unescape('addInstanceVariableNamed%3AtoClass%3A'),
fn: function (aString, aClass){
var self=this;
smalltalk.send(smalltalk.send((smalltalk.ClassBuilder || ClassBuilder), "_new", []), "_addSubclassOf_named_instanceVariableNames_package_", [smalltalk.send(aClass, "_superclass", []), smalltalk.send(aClass, "_name", []), (function($rec){smalltalk.send($rec, "_add_", [aString]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(smalltalk.send(aClass, "_instanceVariableNames", []), "_copy", [])), smalltalk.send(smalltalk.send(aClass, "_package", []), "_name", [])]);
return self;}
}),
smalltalk.Browser);

smalltalk.addMethod(
unescape('_searchReferencesOf_'),
smalltalk.method({
selector: unescape('searchReferencesOf%3A'),
fn: function (aString){
var self=this;
smalltalk.send((smalltalk.ReferencesBrowser || ReferencesBrowser), "_search_", [aString]);
return self;}
}),
smalltalk.Browser);

smalltalk.addMethod(
unescape('_searchClassReferences'),
smalltalk.method({
selector: unescape('searchClassReferences'),
fn: function (){
var self=this;
smalltalk.send((smalltalk.ReferencesBrowser || ReferencesBrowser), "_search_", [smalltalk.send(self['@selectedClass'], "_name", [])]);
return self;}
}),
smalltalk.Browser);

smalltalk.addMethod(
unescape('_search_'),
smalltalk.method({
selector: unescape('search%3A'),
fn: function (aString){
var self=this;
((($receiver = smalltalk.send(self, "_cancelChanges", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){var searchedClass=nil;
(searchedClass=smalltalk.send(smalltalk.send((smalltalk.Smalltalk || Smalltalk), "_current", []), "_at_", [aString]));return ((($receiver = smalltalk.send(searchedClass, "_isClass", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(smalltalk.send(self, "_class", []), "_openOn_", [searchedClass]);})() : (function(){return smalltalk.send(self, "_searchReferencesOf_", [aString]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(smalltalk.send(self, "_class", []), "_openOn_", [searchedClass]);}), (function(){return smalltalk.send(self, "_searchReferencesOf_", [aString]);})]));})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){var searchedClass=nil;
(searchedClass=smalltalk.send(smalltalk.send((smalltalk.Smalltalk || Smalltalk), "_current", []), "_at_", [aString]));return ((($receiver = smalltalk.send(searchedClass, "_isClass", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(smalltalk.send(self, "_class", []), "_openOn_", [searchedClass]);})() : (function(){return smalltalk.send(self, "_searchReferencesOf_", [aString]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(smalltalk.send(self, "_class", []), "_openOn_", [searchedClass]);}), (function(){return smalltalk.send(self, "_searchReferencesOf_", [aString]);})]));})]));
return self;}
}),
smalltalk.Browser);

smalltalk.addMethod(
unescape('_handleSourceAreaKeyDown_'),
smalltalk.method({
selector: unescape('handleSourceAreaKeyDown%3A'),
fn: function (anEvent){
var self=this;
if(anEvent.ctrlKey) {
		if(anEvent.keyCode === 83) { //ctrl+s
			self._compile();
			anEvent.preventDefault();
			return false;
		}
	}
	;
return self;}
}),
smalltalk.Browser);

smalltalk.addMethod(
unescape('_commitPackage'),
smalltalk.method({
selector: unescape('commitPackage'),
fn: function (){
var self=this;
(($receiver = self['@selectedPackage']) != nil && $receiver != undefined) ? (function(){var package=nil;
(package=smalltalk.send((smalltalk.Package || Package), "_named_", [self['@selectedPackage']]));return smalltalk.send([smalltalk.send((smalltalk.Exporter || Exporter), "__minus_gt", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(package, "_commitPathJs", []), "__comma", [unescape("/")]), "__comma", [self['@selectedPackage']]), "__comma", [".js"])]),smalltalk.send((smalltalk.StrippedExporter || StrippedExporter), "__minus_gt", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(package, "_commitPathJs", []), "__comma", [unescape("/")]), "__comma", [self['@selectedPackage']]), "__comma", [".deploy.js"])]),smalltalk.send((smalltalk.ChunkExporter || ChunkExporter), "__minus_gt", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(package, "_commitPathSt", []), "__comma", [unescape("/")]), "__comma", [self['@selectedPackage']]), "__comma", [".st"])])], "_do_", [(function(commitStrategy){var fileContents=nil;
(fileContents=smalltalk.send(smalltalk.send(smalltalk.send(commitStrategy, "_key", []), "_new", []), "_exportPackage_", [self['@selectedPackage']]));return smalltalk.send(self, "_ajaxPutAt_data_", [smalltalk.send(commitStrategy, "_value", []), fileContents]);})]);})() : nil;
return self;}
}),
smalltalk.Browser);

smalltalk.addMethod(
unescape('_renamePackage'),
smalltalk.method({
selector: unescape('renamePackage'),
fn: function (){
var self=this;
var newName=nil;
(newName=smalltalk.send((typeof window == 'undefined' ? nil : window), "_prompt_", [smalltalk.send("Rename package ", "__comma", [self['@selectedPackage']])]));
(($receiver = newName) != nil && $receiver != undefined) ? (function(){return ((($receiver = smalltalk.send(newName, "_notEmpty", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(smalltalk.send((smalltalk.Smalltalk || Smalltalk), "_current", []), "_renamePackage_to_", [self['@selectedPackage'], newName]);return smalltalk.send(self, "_updateCategoriesList", []);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(smalltalk.send((smalltalk.Smalltalk || Smalltalk), "_current", []), "_renamePackage_to_", [self['@selectedPackage'], newName]);return smalltalk.send(self, "_updateCategoriesList", []);})]));})() : nil;
return self;}
}),
smalltalk.Browser);

smalltalk.addMethod(
unescape('_removePackage'),
smalltalk.method({
selector: unescape('removePackage'),
fn: function (){
var self=this;
((($receiver = smalltalk.send((typeof window == 'undefined' ? nil : window), "_confirm_", [smalltalk.send(smalltalk.send("Do you really want to remove the whole package ", "__comma", [self['@selectedPackage']]), "__comma", [unescape("%20with%20all%20its%20classes%3F")])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(smalltalk.send((smalltalk.Smalltalk || Smalltalk), "_current", []), "_removePackage_", [self['@selectedPackage']]);return smalltalk.send(self, "_updateCategoriesList", []);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(smalltalk.send((smalltalk.Smalltalk || Smalltalk), "_current", []), "_removePackage_", [self['@selectedPackage']]);return smalltalk.send(self, "_updateCategoriesList", []);})]));
return self;}
}),
smalltalk.Browser);

smalltalk.addMethod(
unescape('_addNewClass'),
smalltalk.method({
selector: unescape('addNewClass'),
fn: function (){
var self=this;
var className=nil;
(className=smalltalk.send((typeof window == 'undefined' ? nil : window), "_prompt_", ["New class"]));
((($receiver = smalltalk.send(smalltalk.send(className, "_notNil", []), "_and_", [(function(){return smalltalk.send(className, "_notEmpty", []);})])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send((smalltalk.Object || Object), "_subclass_instanceVariableNames_package_", [className, "", smalltalk.send(self, "_selectedPackage", [])]);(function($rec){smalltalk.send($rec, "_resetClassesList", []);return smalltalk.send($rec, "_updateClassesList", []);})(self);return smalltalk.send(self, "_selectClass_", [smalltalk.send(smalltalk.send((smalltalk.Smalltalk || Smalltalk), "_current", []), "_at_", [className])]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send((smalltalk.Object || Object), "_subclass_instanceVariableNames_package_", [className, "", smalltalk.send(self, "_selectedPackage", [])]);(function($rec){smalltalk.send($rec, "_resetClassesList", []);return smalltalk.send($rec, "_updateClassesList", []);})(self);return smalltalk.send(self, "_selectClass_", [smalltalk.send(smalltalk.send((smalltalk.Smalltalk || Smalltalk), "_current", []), "_at_", [className])]);})]));
return self;}
}),
smalltalk.Browser);

smalltalk.addMethod(
unescape('_copyClass'),
smalltalk.method({
selector: unescape('copyClass'),
fn: function (){
var self=this;
var className=nil;
(className=smalltalk.send((typeof window == 'undefined' ? nil : window), "_prompt_", ["Copy class"]));
((($receiver = smalltalk.send(smalltalk.send(className, "_notNil", []), "_and_", [(function(){return smalltalk.send(className, "_notEmpty", []);})])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(smalltalk.send((smalltalk.ClassBuilder || ClassBuilder), "_new", []), "_copyClass_named_", [smalltalk.send(self, "_selectedClass", []), className]);(function($rec){smalltalk.send($rec, "_resetClassesList", []);return smalltalk.send($rec, "_updateClassesList", []);})(self);return smalltalk.send(self, "_selectClass_", [smalltalk.send(smalltalk.send((smalltalk.Smalltalk || Smalltalk), "_current", []), "_at_", [className])]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(smalltalk.send((smalltalk.ClassBuilder || ClassBuilder), "_new", []), "_copyClass_named_", [smalltalk.send(self, "_selectedClass", []), className]);(function($rec){smalltalk.send($rec, "_resetClassesList", []);return smalltalk.send($rec, "_updateClassesList", []);})(self);return smalltalk.send(self, "_selectClass_", [smalltalk.send(smalltalk.send((smalltalk.Smalltalk || Smalltalk), "_current", []), "_at_", [className])]);})]));
return self;}
}),
smalltalk.Browser);

smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
fn: function (){
var self=this;
smalltalk.send(self, "_initialize", [], smalltalk.TabWidget);
(self['@selectedTab']=smalltalk.symbolFor("instance"));
(self['@selectedPackage']=smalltalk.send(smalltalk.send(self, "_packages", []), "_first", []));
(self['@unsavedChanges']=false);
return self;}
}),
smalltalk.Browser);

smalltalk.addMethod(
unescape('_ajaxPutAt_data_'),
smalltalk.method({
selector: unescape('ajaxPutAt%3Adata%3A'),
fn: function (anURL, aString){
var self=this;
smalltalk.send((typeof jQuery == 'undefined' ? nil : jQuery), "_ajax_options_", [anURL, smalltalk.HashedCollection._fromPairs_([smalltalk.send("type", "__minus_gt", ["PUT"]),smalltalk.send("data", "__minus_gt", [aString]),smalltalk.send("contentType", "__minus_gt", [unescape("text/plain%3Bcharset%3DUTF-8")]),smalltalk.send("error", "__minus_gt", [(function(){return smalltalk.send((typeof window == 'undefined' ? nil : window), "_alert_", [smalltalk.send("PUT request failed at:  ", "__comma", [anURL])]);})])])]);
return self;}
}),
smalltalk.Browser);

smalltalk.addMethod(
unescape('_renderBoxOn_'),
smalltalk.method({
selector: unescape('renderBoxOn%3A'),
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_renderTopPanelOn_", [html]);smalltalk.send($rec, "_renderTabsOn_", [html]);return smalltalk.send($rec, "_renderBottomPanelOn_", [html]);})(self);
return self;}
}),
smalltalk.Browser);

smalltalk.addMethod(
unescape('_renderTopPanelOn_'),
smalltalk.method({
selector: unescape('renderTopPanelOn%3A'),
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_class_", ["top"]);return smalltalk.send($rec, "_with_", [(function(){(self['@packagesList']=smalltalk.send(smalltalk.send(html, "_ul", []), "_class_", ["jt_column browser packages"]));(function($rec){smalltalk.send($rec, "_class_", ["jt_packagesButtons"]);return smalltalk.send($rec, "_with_", [(function(){(function($rec){smalltalk.send($rec, "_title_", ["Commit classes in this package to disk"]);smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_commitPackage", []);})]);return smalltalk.send($rec, "_with_", ["Commit"]);})(smalltalk.send(html, "_button", []));(function($rec){smalltalk.send($rec, "_title_", ["Rename package"]);smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_renamePackage", []);})]);return smalltalk.send($rec, "_with_", ["Rename"]);})(smalltalk.send(html, "_button", []));return (function($rec){smalltalk.send($rec, "_title_", ["Remove this package from the system"]);smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_removePackage", []);})]);return smalltalk.send($rec, "_with_", ["Remove"]);})(smalltalk.send(html, "_button", []));})]);})(smalltalk.send(html, "_div", []));(self['@classesList']=smalltalk.send((smalltalk.ClassesList || ClassesList), "_on_", [self]));smalltalk.send(self['@classesList'], "_renderOn_", [html]);(self['@protocolsList']=smalltalk.send(smalltalk.send(html, "_ul", []), "_class_", ["jt_column browser protocols"]));(self['@methodsList']=smalltalk.send(smalltalk.send(html, "_ul", []), "_class_", ["jt_column browser methods"]));(function($rec){smalltalk.send($rec, "_updateCategoriesList", []);smalltalk.send($rec, "_updateClassesList", []);smalltalk.send($rec, "_updateProtocolsList", []);return smalltalk.send($rec, "_updateMethodsList", []);})(self);return smalltalk.send(smalltalk.send(html, "_div", []), "_class_", ["jt_clear"]);})]);})(smalltalk.send(html, "_div", []));
return self;}
}),
smalltalk.Browser);

smalltalk.addMethod(
unescape('_renderTabsOn_'),
smalltalk.method({
selector: unescape('renderTabsOn%3A'),
fn: function (html){
var self=this;
(self['@tabsList']=smalltalk.send(smalltalk.send(html, "_ul", []), "_class_", ["jt_tabs jt_browser"]));
smalltalk.send(self, "_updateTabsList", []);
return self;}
}),
smalltalk.Browser);

smalltalk.addMethod(
unescape('_renderBottomPanelOn_'),
smalltalk.method({
selector: unescape('renderBottomPanelOn%3A'),
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_class_", ["jt_sourceCode"]);return smalltalk.send($rec, "_with_", [(function(){(self['@sourceArea']=smalltalk.send((smalltalk.SourceArea || SourceArea), "_new", []));smalltalk.send(self['@sourceArea'], "_renderOn_", [html]);smalltalk.send(self['@sourceArea'], "_onKeyDown_", [(function(e){return smalltalk.send(self, "_handleSourceAreaKeyDown_", [e]);})]);return smalltalk.send(self['@sourceArea'], "_onKeyUp_", [(function(){return smalltalk.send(self, "_updateStatus", []);})]);})]);})(smalltalk.send(html, "_div", []));
return self;}
}),
smalltalk.Browser);

smalltalk.addMethod(
unescape('_renderButtonsOn_'),
smalltalk.method({
selector: unescape('renderButtonsOn%3A'),
fn: function (html){
var self=this;
(self['@saveButton']=smalltalk.send(html, "_button", []));
(function($rec){smalltalk.send($rec, "_with_", ["Save"]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_compile", []);})]);})(self['@saveButton']);
(self['@methodButtons']=smalltalk.send(html, "_span", []));
(self['@classButtons']=smalltalk.send(html, "_span", []));
(function($rec){smalltalk.send($rec, "_class_", ["right"]);return smalltalk.send($rec, "_with_", [(function(){(function($rec){smalltalk.send($rec, "_with_", ["DoIt"]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self['@sourceArea'], "_doIt", []);})]);})(smalltalk.send(html, "_button", []));(function($rec){smalltalk.send($rec, "_with_", ["PrintIt"]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self['@sourceArea'], "_printIt", []);})]);})(smalltalk.send(html, "_button", []));return (function($rec){smalltalk.send($rec, "_with_", ["InspectIt"]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self['@sourceArea'], "_inspectIt", []);})]);})(smalltalk.send(html, "_button", []));})]);})(smalltalk.send(html, "_div", []));
smalltalk.send(self, "_updateSourceAndButtons", []);
return self;}
}),
smalltalk.Browser);

smalltalk.addMethod(
unescape('_canBeClosed'),
smalltalk.method({
selector: unescape('canBeClosed'),
fn: function (){
var self=this;
return true;
return self;}
}),
smalltalk.Browser);

smalltalk.addMethod(
unescape('_updateCategoriesList'),
smalltalk.method({
selector: unescape('updateCategoriesList'),
fn: function (){
var self=this;
smalltalk.send(self['@packagesList'], "_contents_", [(function(html){return smalltalk.send(smalltalk.send(self, "_packages", []), "_do_", [(function(each){var li=nil;
var label=nil;
((($receiver = smalltalk.send(each, "_isEmpty", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (label="Unclassified");})() : (function(){return (label=each);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return (label="Unclassified");}), (function(){return (label=each);})]));(li=smalltalk.send(html, "_li", []));((($receiver = smalltalk.send(self['@selectedPackage'], "__eq", [each])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(li, "_class_", ["selected"]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(li, "_class_", ["selected"]);})]));return (function($rec){smalltalk.send($rec, "_with_", [label]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_selectCategory_", [each]);})]);})(li);})]);})]);
return self;}
}),
smalltalk.Browser);

smalltalk.addMethod(
unescape('_updateClassesList'),
smalltalk.method({
selector: unescape('updateClassesList'),
fn: function (){
var self=this;
smalltalk.send(smalltalk.send((smalltalk.TabManager || TabManager), "_current", []), "_update", []);
smalltalk.send(self['@classesList'], "_updateNodes", []);
return self;}
}),
smalltalk.Browser);

smalltalk.addMethod(
unescape('_updateProtocolsList'),
smalltalk.method({
selector: unescape('updateProtocolsList'),
fn: function (){
var self=this;
smalltalk.send(self['@protocolsList'], "_contents_", [(function(html){return smalltalk.send(smalltalk.send(self, "_protocols", []), "_do_", [(function(each){var li=nil;
(li=smalltalk.send(html, "_li", []));((($receiver = smalltalk.send(self['@selectedProtocol'], "__eq", [each])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(li, "_class_", ["selected"]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(li, "_class_", ["selected"]);})]));return (function($rec){smalltalk.send($rec, "_with_", [each]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_selectProtocol_", [each]);})]);})(li);})]);})]);
return self;}
}),
smalltalk.Browser);

smalltalk.addMethod(
unescape('_updateMethodsList'),
smalltalk.method({
selector: unescape('updateMethodsList'),
fn: function (){
var self=this;
smalltalk.send(self['@methodsList'], "_contents_", [(function(html){return smalltalk.send(smalltalk.send(self, "_methods", []), "_do_", [(function(each){var li=nil;
(li=smalltalk.send(html, "_li", []));((($receiver = smalltalk.send(self['@selectedMethod'], "__eq", [each])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(li, "_class_", ["selected"]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(li, "_class_", ["selected"]);})]));return (function($rec){smalltalk.send($rec, "_with_", [smalltalk.send(each, "_selector", [])]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_selectMethod_", [each]);})]);})(li);})]);})]);
return self;}
}),
smalltalk.Browser);

smalltalk.addMethod(
unescape('_updateTabsList'),
smalltalk.method({
selector: unescape('updateTabsList'),
fn: function (){
var self=this;
smalltalk.send(self['@tabsList'], "_contents_", [(function(html){var li=nil;
(li=smalltalk.send(html, "_li", []));((($receiver = smalltalk.send(self['@selectedTab'], "__eq", [smalltalk.symbolFor("instance")])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(li, "_class_", ["selected"]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(li, "_class_", ["selected"]);})]));(function($rec){smalltalk.send($rec, "_with_", [(function(){smalltalk.send(smalltalk.send(html, "_span", []), "_class_", ["ltab"]);(function($rec){smalltalk.send($rec, "_class_", ["mtab"]);return smalltalk.send($rec, "_with_", ["Instance"]);})(smalltalk.send(html, "_span", []));return smalltalk.send(smalltalk.send(html, "_span", []), "_class_", ["rtab"]);})]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_selectTab_", [smalltalk.symbolFor("instance")]);})]);})(li);(li=smalltalk.send(html, "_li", []));((($receiver = smalltalk.send(self['@selectedTab'], "__eq", [smalltalk.symbolFor("class")])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(li, "_class_", ["selected"]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(li, "_class_", ["selected"]);})]));(function($rec){smalltalk.send($rec, "_with_", [(function(){smalltalk.send(smalltalk.send(html, "_span", []), "_class_", ["ltab"]);(function($rec){smalltalk.send($rec, "_class_", ["mtab"]);return smalltalk.send($rec, "_with_", ["Class"]);})(smalltalk.send(html, "_span", []));return smalltalk.send(smalltalk.send(html, "_span", []), "_class_", ["rtab"]);})]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_selectTab_", [smalltalk.symbolFor("class")]);})]);})(li);(li=smalltalk.send(html, "_li", []));((($receiver = smalltalk.send(self['@selectedTab'], "__eq", [smalltalk.symbolFor("comment")])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(li, "_class_", ["selected"]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(li, "_class_", ["selected"]);})]));return (function($rec){smalltalk.send($rec, "_with_", [(function(){smalltalk.send(smalltalk.send(html, "_span", []), "_class_", ["ltab"]);(function($rec){smalltalk.send($rec, "_class_", ["mtab"]);return smalltalk.send($rec, "_with_", ["Comment"]);})(smalltalk.send(html, "_span", []));return smalltalk.send(smalltalk.send(html, "_span", []), "_class_", ["rtab"]);})]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_selectTab_", [smalltalk.symbolFor("comment")]);})]);})(li);})]);
return self;}
}),
smalltalk.Browser);

smalltalk.addMethod(
unescape('_updateSourceAndButtons'),
smalltalk.method({
selector: unescape('updateSourceAndButtons'),
fn: function (){
var self=this;
smalltalk.send(self, "_disableSaveButton", []);
smalltalk.send(self['@classButtons'], "_contents_", [(function(html){(function($rec){smalltalk.send($rec, "_title_", ["Create a new class"]);smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_addNewClass", []);})]);return smalltalk.send($rec, "_with_", ["New class"]);})(smalltalk.send(html, "_button", []));(function($rec){smalltalk.send($rec, "_with_", ["Rename class"]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_renameClass", []);})]);})(smalltalk.send(html, "_button", []));(function($rec){smalltalk.send($rec, "_with_", ["Copy class"]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_copyClass", []);})]);})(smalltalk.send(html, "_button", []));(function($rec){smalltalk.send($rec, "_with_", ["Remove class"]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_removeClass", []);})]);})(smalltalk.send(html, "_button", []));return (function($rec){smalltalk.send($rec, "_with_", ["References"]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_searchClassReferences", []);})]);})(smalltalk.send(html, "_button", []));})]);
smalltalk.send(self['@methodButtons'], "_contents_", [(function(html){var protocolSelect=nil;
var referencesSelect=nil;
(function($rec){smalltalk.send($rec, "_with_", ["Remove method"]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_removeMethod", []);})]);})(smalltalk.send(html, "_button", []));(protocolSelect=smalltalk.send(html, "_select", []));(function($rec){smalltalk.send($rec, "_onChange_", [(function(){return smalltalk.send(self, "_setMethodProtocol_", [smalltalk.send(smalltalk.send(protocolSelect, "_asJQuery", []), "_val", [])]);})]);return smalltalk.send($rec, "_with_", [(function(){(function($rec){smalltalk.send($rec, "_with_", ["Method protocol"]);return smalltalk.send($rec, "_at_put_", ["disabled", "disabled"]);})(smalltalk.send(html, "_option", []));(function($rec){smalltalk.send($rec, "_class_", ["important"]);return smalltalk.send($rec, "_with_", ["New..."]);})(smalltalk.send(html, "_option", []));return smalltalk.send(smalltalk.send(self, "_protocols", []), "_do_", [(function(each){(option=smalltalk.send(smalltalk.send(html, "_option", []), "_with_", [each]));return ((($receiver = smalltalk.send(self['@selectedProtocol'], "__eq", [each])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send((typeof option == 'undefined' ? nil : option), "_at_put_", ["selected", "selected"]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send((typeof option == 'undefined' ? nil : option), "_at_put_", ["selected", "selected"]);})]));})]);})]);})(protocolSelect);return ((($receiver = smalltalk.send(self['@selectedMethod'], "_isNil", [])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){(referencesSelect=smalltalk.send(html, "_select", []));return (function($rec){smalltalk.send($rec, "_onChange_", [(function(){return smalltalk.send(self, "_searchReferencesOf_", [smalltalk.send(smalltalk.send(referencesSelect, "_asJQuery", []), "_val", [])]);})]);return smalltalk.send($rec, "_with_", [(function(){var option=nil;
(function($rec){smalltalk.send($rec, "_with_", ["References"]);return smalltalk.send($rec, "_at_put_", ["disabled", "disabled"]);})(smalltalk.send(html, "_option", []));(function($rec){smalltalk.send($rec, "_class_", ["important"]);return smalltalk.send($rec, "_with_", [smalltalk.send(self['@selectedMethod'], "_selector", [])]);})(smalltalk.send(html, "_option", []));return smalltalk.send(smalltalk.send(smalltalk.send(self['@selectedMethod'], "_messageSends", []), "_sorted", []), "_do_", [(function(each){return smalltalk.send(smalltalk.send(html, "_option", []), "_with_", [each]);})]);})]);})(referencesSelect);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){(referencesSelect=smalltalk.send(html, "_select", []));return (function($rec){smalltalk.send($rec, "_onChange_", [(function(){return smalltalk.send(self, "_searchReferencesOf_", [smalltalk.send(smalltalk.send(referencesSelect, "_asJQuery", []), "_val", [])]);})]);return smalltalk.send($rec, "_with_", [(function(){var option=nil;
(function($rec){smalltalk.send($rec, "_with_", ["References"]);return smalltalk.send($rec, "_at_put_", ["disabled", "disabled"]);})(smalltalk.send(html, "_option", []));(function($rec){smalltalk.send($rec, "_class_", ["important"]);return smalltalk.send($rec, "_with_", [smalltalk.send(self['@selectedMethod'], "_selector", [])]);})(smalltalk.send(html, "_option", []));return smalltalk.send(smalltalk.send(smalltalk.send(self['@selectedMethod'], "_messageSends", []), "_sorted", []), "_do_", [(function(each){return smalltalk.send(smalltalk.send(html, "_option", []), "_with_", [each]);})]);})]);})(referencesSelect);})]));})]);
((($receiver = smalltalk.send(self['@selectedMethod'], "_isNil", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_hideMethodButtons", []);return ((($receiver = smalltalk.send(smalltalk.send(self['@selectedClass'], "_isNil", []), "_or_", [(function(){return smalltalk.send(self['@selectedProtocol'], "_notNil", []);})])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_hideClassButtons", []);})() : (function(){return smalltalk.send(self, "_showClassButtons", []);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self, "_hideClassButtons", []);}), (function(){return smalltalk.send(self, "_showClassButtons", []);})]));})() : (function(){smalltalk.send(self, "_hideClassButtons", []);return smalltalk.send(self, "_showMethodButtons", []);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){smalltalk.send(self, "_hideMethodButtons", []);return ((($receiver = smalltalk.send(smalltalk.send(self['@selectedClass'], "_isNil", []), "_or_", [(function(){return smalltalk.send(self['@selectedProtocol'], "_notNil", []);})])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_hideClassButtons", []);})() : (function(){return smalltalk.send(self, "_showClassButtons", []);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self, "_hideClassButtons", []);}), (function(){return smalltalk.send(self, "_showClassButtons", []);})]));}), (function(){smalltalk.send(self, "_hideClassButtons", []);return smalltalk.send(self, "_showMethodButtons", []);})]));
smalltalk.send(self['@sourceArea'], "_val_", [smalltalk.send(self, "_source", [])]);
return self;}
}),
smalltalk.Browser);

smalltalk.addMethod(
unescape('_updateStatus'),
smalltalk.method({
selector: unescape('updateStatus'),
fn: function (){
var self=this;
((($receiver = smalltalk.send(smalltalk.send(self['@sourceArea'], "_val", []), "__eq", [smalltalk.send(self, "_source", [])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){(($receiver = self['@saveButton']) != nil && $receiver != undefined) ? (function(){return smalltalk.send(self['@saveButton'], "_at_put_", ["disabled", true]);})() : nil;return (self['@unsavedChanges']=false);})() : (function(){(($receiver = self['@saveButton']) != nil && $receiver != undefined) ? (function(){return smalltalk.send(self['@saveButton'], "_removeAt_", ["disabled"]);})() : nil;return (self['@unsavedChanges']=true);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){(($receiver = self['@saveButton']) != nil && $receiver != undefined) ? (function(){return smalltalk.send(self['@saveButton'], "_at_put_", ["disabled", true]);})() : nil;return (self['@unsavedChanges']=false);}), (function(){(($receiver = self['@saveButton']) != nil && $receiver != undefined) ? (function(){return smalltalk.send(self['@saveButton'], "_removeAt_", ["disabled"]);})() : nil;return (self['@unsavedChanges']=true);})]));
return self;}
}),
smalltalk.Browser);

smalltalk.addMethod(
unescape('_resetClassesList'),
smalltalk.method({
selector: unescape('resetClassesList'),
fn: function (){
var self=this;
smalltalk.send(self['@classesList'], "_resetNodes", []);
return self;}
}),
smalltalk.Browser);


smalltalk.addMethod(
unescape('_commitPathJs'),
smalltalk.method({
selector: unescape('commitPathJs'),
fn: function (){
var self=this;
return "js";
return self;}
}),
smalltalk.Browser.klass);

smalltalk.addMethod(
unescape('_commitPathSt'),
smalltalk.method({
selector: unescape('commitPathSt'),
fn: function (){
var self=this;
return "st";
return self;}
}),
smalltalk.Browser.klass);

smalltalk.addMethod(
unescape('_openOn_'),
smalltalk.method({
selector: unescape('openOn%3A'),
fn: function (aClass){
var self=this;
return (function($rec){smalltalk.send($rec, "_open", []);smalltalk.send($rec, "_selectCategory_", [smalltalk.send(aClass, "_category", [])]);return smalltalk.send($rec, "_selectClass_", [aClass]);})(smalltalk.send(self, "_new", []));
return self;}
}),
smalltalk.Browser.klass);

smalltalk.addMethod(
unescape('_open'),
smalltalk.method({
selector: unescape('open'),
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self, "_new", []), "_open", []);
return self;}
}),
smalltalk.Browser.klass);


smalltalk.addClass('Inspector', smalltalk.TabWidget, ['label', 'variables', 'object', 'selectedVariable', 'variablesList', 'valueTextarea', 'diveButton', 'sourceArea'], 'IDE');
smalltalk.addMethod(
unescape('_label'),
smalltalk.method({
selector: unescape('label'),
fn: function (){
var self=this;
return (($receiver = self['@label']) == nil || $receiver == undefined) ? (function(){return unescape("Inspector%20%28nil%29");})() : $receiver;
return self;}
}),
smalltalk.Inspector);

smalltalk.addMethod(
unescape('_variables'),
smalltalk.method({
selector: unescape('variables'),
fn: function (){
var self=this;
return self['@variables'];
return self;}
}),
smalltalk.Inspector);

smalltalk.addMethod(
unescape('_setVariables_'),
smalltalk.method({
selector: unescape('setVariables%3A'),
fn: function (aCollection){
var self=this;
(self['@variables']=aCollection);
return self;}
}),
smalltalk.Inspector);

smalltalk.addMethod(
unescape('_setLabel_'),
smalltalk.method({
selector: unescape('setLabel%3A'),
fn: function (aString){
var self=this;
(self['@label']=aString);
return self;}
}),
smalltalk.Inspector);

smalltalk.addMethod(
unescape('_selectedVariable'),
smalltalk.method({
selector: unescape('selectedVariable'),
fn: function (){
var self=this;
return self['@selectedVariable'];
return self;}
}),
smalltalk.Inspector);

smalltalk.addMethod(
unescape('_selectedVariable_'),
smalltalk.method({
selector: unescape('selectedVariable%3A'),
fn: function (aString){
var self=this;
(self['@selectedVariable']=aString);
return self;}
}),
smalltalk.Inspector);

smalltalk.addMethod(
unescape('_sourceArea'),
smalltalk.method({
selector: unescape('sourceArea'),
fn: function (){
var self=this;
return self['@sourceArea'];
return self;}
}),
smalltalk.Inspector);

smalltalk.addMethod(
unescape('_inspect_'),
smalltalk.method({
selector: unescape('inspect%3A'),
fn: function (anObject){
var self=this;
(self['@object']=anObject);
(self['@variables']=[]);
smalltalk.send(self['@object'], "_inspectOn_", [self]);
return self;}
}),
smalltalk.Inspector);

smalltalk.addMethod(
unescape('_dive'),
smalltalk.method({
selector: unescape('dive'),
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(smalltalk.send(self, "_variables", []), "_at_", [smalltalk.send(self, "_selectedVariable", [])]), "_inspect", []);
return self;}
}),
smalltalk.Inspector);

smalltalk.addMethod(
unescape('_refresh'),
smalltalk.method({
selector: unescape('refresh'),
fn: function (){
var self=this;
(function($rec){smalltalk.send($rec, "_inspect_", [self['@object']]);smalltalk.send($rec, "_updateVariablesList", []);return smalltalk.send($rec, "_updateValueTextarea", []);})(self);
return self;}
}),
smalltalk.Inspector);

smalltalk.addMethod(
unescape('_renderBoxOn_'),
smalltalk.method({
selector: unescape('renderBoxOn%3A'),
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_renderTopPanelOn_", [html]);return smalltalk.send($rec, "_renderBottomPanelOn_", [html]);})(self);
return self;}
}),
smalltalk.Inspector);

smalltalk.addMethod(
unescape('_renderTopPanelOn_'),
smalltalk.method({
selector: unescape('renderTopPanelOn%3A'),
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_class_", ["top"]);return smalltalk.send($rec, "_with_", [(function(){(self['@variablesList']=smalltalk.send(smalltalk.send(html, "_ul", []), "_class_", ["jt_column variables"]));(self['@valueTextarea']=(function($rec){smalltalk.send($rec, "_class_", ["jt_column value"]);return smalltalk.send($rec, "_at_put_", ["readonly", "readonly"]);})(smalltalk.send(html, "_textarea", [])));(function($rec){smalltalk.send($rec, "_class_", ["jt_tabs inspector"]);return smalltalk.send($rec, "_with_", [(function(){(function($rec){smalltalk.send($rec, "_class_", ["jt_button inspector refresh"]);smalltalk.send($rec, "_with_", ["Refresh"]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_refresh", []);})]);})(smalltalk.send(html, "_button", []));return (self['@diveButton']=(function($rec){smalltalk.send($rec, "_class_", ["jt_button inspector dive"]);smalltalk.send($rec, "_with_", ["Dive"]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_dive", []);})]);})(smalltalk.send(html, "_button", [])));})]);})(smalltalk.send(html, "_div", []));return smalltalk.send(smalltalk.send(html, "_div", []), "_class_", ["jt_clear"]);})]);})(smalltalk.send(html, "_div", []));
(function($rec){smalltalk.send($rec, "_updateVariablesList", []);return smalltalk.send($rec, "_updateValueTextarea", []);})(self);
return self;}
}),
smalltalk.Inspector);

smalltalk.addMethod(
unescape('_renderBottomPanelOn_'),
smalltalk.method({
selector: unescape('renderBottomPanelOn%3A'),
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_class_", ["jt_sourceCode"]);return smalltalk.send($rec, "_with_", [(function(){(self['@sourceArea']=(function($rec){smalltalk.send($rec, "_receiver_", [self['@object']]);smalltalk.send($rec, "_onDoIt_", [(function(){return smalltalk.send(self, "_refresh", []);})]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.SourceArea || SourceArea), "_new", [])));return smalltalk.send(self['@sourceArea'], "_renderOn_", [html]);})]);})(smalltalk.send(html, "_div", []));
return self;}
}),
smalltalk.Inspector);

smalltalk.addMethod(
unescape('_renderButtonsOn_'),
smalltalk.method({
selector: unescape('renderButtonsOn%3A'),
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_with_", ["DoIt"]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(smalltalk.send(self, "_sourceArea", []), "_doIt", []);})]);})(smalltalk.send(html, "_button", []));
(function($rec){smalltalk.send($rec, "_with_", ["PrintIt"]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(smalltalk.send(self, "_sourceArea", []), "_printIt", []);})]);})(smalltalk.send(html, "_button", []));
(function($rec){smalltalk.send($rec, "_with_", ["InspectIt"]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(smalltalk.send(self, "_sourceArea", []), "_inspectIt", []);})]);})(smalltalk.send(html, "_button", []));
smalltalk.send(self, "_updateButtons", []);
return self;}
}),
smalltalk.Inspector);

smalltalk.addMethod(
unescape('_canBeClosed'),
smalltalk.method({
selector: unescape('canBeClosed'),
fn: function (){
var self=this;
return true;
return self;}
}),
smalltalk.Inspector);

smalltalk.addMethod(
unescape('_updateVariablesList'),
smalltalk.method({
selector: unescape('updateVariablesList'),
fn: function (){
var self=this;
smalltalk.send(self['@variablesList'], "_contents_", [(function(html){return smalltalk.send(smalltalk.send(smalltalk.send(self, "_variables", []), "_keys", []), "_do_", [(function(each){var li=nil;
(li=smalltalk.send(html, "_li", []));(function($rec){smalltalk.send($rec, "_with_", [each]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_selectVariable_", [each]);})]);})(li);return ((($receiver = smalltalk.send(smalltalk.send(self, "_selectedVariable", []), "__eq", [each])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(li, "_class_", ["selected"]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(li, "_class_", ["selected"]);})]));})]);})]);
return self;}
}),
smalltalk.Inspector);

smalltalk.addMethod(
unescape('_selectVariable_'),
smalltalk.method({
selector: unescape('selectVariable%3A'),
fn: function (aString){
var self=this;
smalltalk.send(self, "_selectedVariable_", [aString]);
(function($rec){smalltalk.send($rec, "_updateVariablesList", []);smalltalk.send($rec, "_updateValueTextarea", []);return smalltalk.send($rec, "_updateButtons", []);})(self);
return self;}
}),
smalltalk.Inspector);

smalltalk.addMethod(
unescape('_updateValueTextarea'),
smalltalk.method({
selector: unescape('updateValueTextarea'),
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self['@valueTextarea'], "_asJQuery", []), "_val_", [((($receiver = smalltalk.send(smalltalk.send(self, "_selectedVariable", []), "_isNil", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return "";})() : (function(){return smalltalk.send(smalltalk.send(smalltalk.send(self, "_variables", []), "_at_", [smalltalk.send(self, "_selectedVariable", [])]), "_printString", []);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return "";}), (function(){return smalltalk.send(smalltalk.send(smalltalk.send(self, "_variables", []), "_at_", [smalltalk.send(self, "_selectedVariable", [])]), "_printString", []);})]))]);
return self;}
}),
smalltalk.Inspector);

smalltalk.addMethod(
unescape('_updateButtons'),
smalltalk.method({
selector: unescape('updateButtons'),
fn: function (){
var self=this;
((($receiver = smalltalk.send(smalltalk.send(smalltalk.send(self, "_selectedVariable", []), "_notNil", []), "_and_", [(function(){return smalltalk.send(smalltalk.send(smalltalk.send(self, "_variables", []), "_at_", [smalltalk.send(self, "_selectedVariable", [])]), "_notNil", []);})])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(self['@diveButton'], "_at_put_", ["disabled", true]);})() : (function(){return smalltalk.send(self['@diveButton'], "_removeAt_", ["disabled"]);})()) : smalltalk.send($receiver, "_ifFalse_ifTrue_", [(function(){return smalltalk.send(self['@diveButton'], "_at_put_", ["disabled", true]);}), (function(){return smalltalk.send(self['@diveButton'], "_removeAt_", ["disabled"]);})]));
return self;}
}),
smalltalk.Inspector);


smalltalk.addMethod(
unescape('_on_'),
smalltalk.method({
selector: unescape('on%3A'),
fn: function (anObject){
var self=this;
return (function($rec){smalltalk.send($rec, "_inspect_", [anObject]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;}
}),
smalltalk.Inspector.klass);


smalltalk.addClass('ReferencesBrowser', smalltalk.TabWidget, ['implementors', 'senders', 'implementorsList', 'input', 'timer', 'selector', 'sendersList', 'referencedClasses', 'referencedClassesList'], 'IDE');
smalltalk.addMethod(
unescape('_implementors'),
smalltalk.method({
selector: unescape('implementors'),
fn: function (){
var self=this;
return (($receiver = self['@implementors']) == nil || $receiver == undefined) ? (function(){return (self['@implementors']=smalltalk.send((smalltalk.Array || Array), "_new", []));})() : $receiver;
return self;}
}),
smalltalk.ReferencesBrowser);

smalltalk.addMethod(
unescape('_label'),
smalltalk.method({
selector: unescape('label'),
fn: function (){
var self=this;
return unescape("%5BReferences%5D");
return self;}
}),
smalltalk.ReferencesBrowser);

smalltalk.addMethod(
unescape('_selector'),
smalltalk.method({
selector: unescape('selector'),
fn: function (){
var self=this;
return self['@selector'];
return self;}
}),
smalltalk.ReferencesBrowser);

smalltalk.addMethod(
unescape('_senders'),
smalltalk.method({
selector: unescape('senders'),
fn: function (){
var self=this;
return (($receiver = self['@senders']) == nil || $receiver == undefined) ? (function(){return (self['@senders']=smalltalk.send((smalltalk.Array || Array), "_new", []));})() : $receiver;
return self;}
}),
smalltalk.ReferencesBrowser);

smalltalk.addMethod(
unescape('_classesAndMetaclasses'),
smalltalk.method({
selector: unescape('classesAndMetaclasses'),
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(smalltalk.send((smalltalk.Smalltalk || Smalltalk), "_current", []), "_classes", []), "__comma", [smalltalk.send(smalltalk.send(smalltalk.send((smalltalk.Smalltalk || Smalltalk), "_current", []), "_classes", []), "_collect_", [(function(each){return smalltalk.send(each, "_class", []);})])]);
return self;}
}),
smalltalk.ReferencesBrowser);

smalltalk.addMethod(
unescape('_referencedClasses'),
smalltalk.method({
selector: unescape('referencedClasses'),
fn: function (){
var self=this;
return (($receiver = self['@referencedClasses']) == nil || $receiver == undefined) ? (function(){return (self['@referencedClasses']=smalltalk.send((smalltalk.Array || Array), "_new", []));})() : $receiver;
return self;}
}),
smalltalk.ReferencesBrowser);

smalltalk.addMethod(
unescape('_openBrowserOn_'),
smalltalk.method({
selector: unescape('openBrowserOn%3A'),
fn: function (aMethod){
var self=this;
var browser=nil;
(browser=smalltalk.send((smalltalk.Browser || Browser), "_openOn_", [((($receiver = smalltalk.send(smalltalk.send(aMethod, "_methodClass", []), "_isMetaclass", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(smalltalk.send(aMethod, "_methodClass", []), "_instanceClass", []);})() : (function(){return smalltalk.send(aMethod, "_methodClass", []);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(smalltalk.send(aMethod, "_methodClass", []), "_instanceClass", []);}), (function(){return smalltalk.send(aMethod, "_methodClass", []);})]))]));
((($receiver = smalltalk.send(smalltalk.send(aMethod, "_methodClass", []), "_isMetaclass", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(browser, "_selectTab_", [smalltalk.symbolFor("class")]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(browser, "_selectTab_", [smalltalk.symbolFor("class")]);})]));
(function($rec){smalltalk.send($rec, "_selectProtocol_", [smalltalk.send(aMethod, "_category", [])]);return smalltalk.send($rec, "_selectMethod_", [aMethod]);})(browser);
return self;}
}),
smalltalk.ReferencesBrowser);

smalltalk.addMethod(
unescape('_searchReferencesFor_'),
smalltalk.method({
selector: unescape('searchReferencesFor%3A'),
fn: function (aString){
var self=this;
(self['@selector']=aString);
(self['@implementors']=smalltalk.send((smalltalk.Array || Array), "_new", []));
(self['@senders']=smalltalk.send((smalltalk.Array || Array), "_new", []));
(self['@referencedClasses']=smalltalk.send((smalltalk.Array || Array), "_new", []));
((($receiver = smalltalk.send(self['@selector'], "_match_", [unescape("%5E%5BA-Z%5D")])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(self, "_searchSelectorReferencesFor_", [self['@selector']]);})() : (function(){return smalltalk.send(self, "_searchReferencedClassesFor_", [self['@selector']]);})()) : smalltalk.send($receiver, "_ifFalse_ifTrue_", [(function(){return smalltalk.send(self, "_searchSelectorReferencesFor_", [self['@selector']]);}), (function(){return smalltalk.send(self, "_searchReferencedClassesFor_", [self['@selector']]);})]));
return self;}
}),
smalltalk.ReferencesBrowser);

smalltalk.addMethod(
unescape('_search_'),
smalltalk.method({
selector: unescape('search%3A'),
fn: function (aString){
var self=this;
(function($rec){smalltalk.send($rec, "_searchReferencesFor_", [aString]);smalltalk.send($rec, "_updateImplementorsList", []);smalltalk.send($rec, "_updateSendersList", []);return smalltalk.send($rec, "_updateReferencedClassesList", []);})(self);
return self;}
}),
smalltalk.ReferencesBrowser);

smalltalk.addMethod(
unescape('_searchReferencedClassesFor_'),
smalltalk.method({
selector: unescape('searchReferencedClassesFor%3A'),
fn: function (aString){
var self=this;
smalltalk.send(smalltalk.send(self, "_classesAndMetaclasses", []), "_do_", [(function(each){return smalltalk.send(smalltalk.send(smalltalk.send(each, "_methodDictionary", []), "_values", []), "_do_", [(function(value){return ((($receiver = smalltalk.send(smalltalk.send(value, "_referencedClasses", []), "_includes_", [self['@selector']])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(smalltalk.send(self, "_referencedClasses", []), "_add_", [value]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(smalltalk.send(self, "_referencedClasses", []), "_add_", [value]);})]));})]);})]);
return self;}
}),
smalltalk.ReferencesBrowser);

smalltalk.addMethod(
unescape('_searchSelectorReferencesFor_'),
smalltalk.method({
selector: unescape('searchSelectorReferencesFor%3A'),
fn: function (aString){
var self=this;
smalltalk.send(smalltalk.send(self, "_classesAndMetaclasses", []), "_do_", [(function(each){return smalltalk.send(smalltalk.send(each, "_methodDictionary", []), "_keysAndValuesDo_", [(function(key, value){((($receiver = smalltalk.send(key, "__eq", [self['@selector']])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(smalltalk.send(self, "_implementors", []), "_add_", [value]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(smalltalk.send(self, "_implementors", []), "_add_", [value]);})]));return ((($receiver = smalltalk.send(smalltalk.send(value, "_messageSends", []), "_includes_", [self['@selector']])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(smalltalk.send(self, "_senders", []), "_add_", [value]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(smalltalk.send(self, "_senders", []), "_add_", [value]);})]));})]);})]);
return self;}
}),
smalltalk.ReferencesBrowser);

smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
fn: function (){
var self=this;
smalltalk.send(self, "_initialize", [], smalltalk.TabWidget);
(self['@selector']="");
return self;}
}),
smalltalk.ReferencesBrowser);

smalltalk.addMethod(
unescape('_setInputEvents'),
smalltalk.method({
selector: unescape('setInputEvents'),
fn: function (){
var self=this;
(function($rec){smalltalk.send($rec, "_onKeyUp_", [(function(){return (self['@timer']=smalltalk.send((function(){return smalltalk.send(self, "_search_", [smalltalk.send(smalltalk.send(self['@input'], "_asJQuery", []), "_val", [])]);}), "_valueWithTimeout_", [(100)]));})]);return smalltalk.send($rec, "_onKeyDown_", [(function(){return (($receiver = self['@timer']) != nil && $receiver != undefined) ? (function(){return smalltalk.send(self['@timer'], "_clearTimeout", []);})() : nil;})]);})(self['@input']);
return self;}
}),
smalltalk.ReferencesBrowser);

smalltalk.addMethod(
unescape('_renderBoxOn_'),
smalltalk.method({
selector: unescape('renderBoxOn%3A'),
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_renderInputOn_", [html]);smalltalk.send($rec, "_renderImplementorsOn_", [html]);smalltalk.send($rec, "_renderSendersOn_", [html]);return smalltalk.send($rec, "_renderReferencedClassesOn_", [html]);})(self);
return self;}
}),
smalltalk.ReferencesBrowser);

smalltalk.addMethod(
unescape('_renderInputOn_'),
smalltalk.method({
selector: unescape('renderInputOn%3A'),
fn: function (html){
var self=this;
(self['@input']=(function($rec){smalltalk.send($rec, "_class_", ["implementors"]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(html, "_input", [])));
smalltalk.send(smalltalk.send(self['@input'], "_asJQuery", []), "_val_", [self['@selector']]);
smalltalk.send(self, "_setInputEvents", []);
return self;}
}),
smalltalk.ReferencesBrowser);

smalltalk.addMethod(
unescape('_renderImplementorsOn_'),
smalltalk.method({
selector: unescape('renderImplementorsOn%3A'),
fn: function (html){
var self=this;
(self['@implementorsList']=smalltalk.send(smalltalk.send(html, "_ul", []), "_class_", ["jt_column implementors"]));
smalltalk.send(self, "_updateImplementorsList", []);
return self;}
}),
smalltalk.ReferencesBrowser);

smalltalk.addMethod(
unescape('_renderSendersOn_'),
smalltalk.method({
selector: unescape('renderSendersOn%3A'),
fn: function (html){
var self=this;
(self['@sendersList']=smalltalk.send(smalltalk.send(html, "_ul", []), "_class_", ["jt_column senders"]));
smalltalk.send(self, "_updateSendersList", []);
return self;}
}),
smalltalk.ReferencesBrowser);

smalltalk.addMethod(
unescape('_renderReferencedClassesOn_'),
smalltalk.method({
selector: unescape('renderReferencedClassesOn%3A'),
fn: function (html){
var self=this;
(self['@referencedClassesList']=smalltalk.send(smalltalk.send(html, "_ul", []), "_class_", ["jt_column referenced_classes"]));
smalltalk.send(self, "_updateReferencedClassesList", []);
return self;}
}),
smalltalk.ReferencesBrowser);

smalltalk.addMethod(
unescape('_canBeClosed'),
smalltalk.method({
selector: unescape('canBeClosed'),
fn: function (){
var self=this;
return true;
return self;}
}),
smalltalk.ReferencesBrowser);

smalltalk.addMethod(
unescape('_updateImplementorsList'),
smalltalk.method({
selector: unescape('updateImplementorsList'),
fn: function (){
var self=this;
smalltalk.send(self['@implementorsList'], "_contents_", [(function(html){(function($rec){smalltalk.send($rec, "_class_", ["column_label"]);smalltalk.send($rec, "_with_", [smalltalk.send(smalltalk.send(unescape("Implementors%20%28"), "__comma", [smalltalk.send(smalltalk.send(smalltalk.send(self, "_implementors", []), "_size", []), "_asString", [])]), "__comma", [unescape("%29")])]);return smalltalk.send($rec, "_style_", [unescape("font-weight%3A%20bold")]);})(smalltalk.send(html, "_li", []));return smalltalk.send(smalltalk.send(self, "_implementors", []), "_do_", [(function(each){var li=nil;
(li=smalltalk.send(html, "_li", []));return (function($rec){smalltalk.send($rec, "_with_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(each, "_methodClass", []), "_asString", []), "__comma", [unescape("%20%3E%3E%20")]), "__comma", [smalltalk.send(self, "_selector", [])])]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_openBrowserOn_", [each]);})]);})(li);})]);})]);
return self;}
}),
smalltalk.ReferencesBrowser);

smalltalk.addMethod(
unescape('_updateSendersList'),
smalltalk.method({
selector: unescape('updateSendersList'),
fn: function (){
var self=this;
smalltalk.send(self['@sendersList'], "_contents_", [(function(html){(function($rec){smalltalk.send($rec, "_class_", ["column_label"]);smalltalk.send($rec, "_with_", [smalltalk.send(smalltalk.send(unescape("Senders%20%28"), "__comma", [smalltalk.send(smalltalk.send(smalltalk.send(self, "_senders", []), "_size", []), "_asString", [])]), "__comma", [unescape("%29")])]);return smalltalk.send($rec, "_style_", [unescape("font-weight%3A%20bold")]);})(smalltalk.send(html, "_li", []));return smalltalk.send(smalltalk.send(self, "_senders", []), "_do_", [(function(each){return (function($rec){smalltalk.send($rec, "_with_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(each, "_methodClass", []), "_asString", []), "__comma", [unescape("%20%3E%3E%20")]), "__comma", [smalltalk.send(each, "_selector", [])])]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_openBrowserOn_", [each]);})]);})(smalltalk.send(html, "_li", []));})]);})]);
return self;}
}),
smalltalk.ReferencesBrowser);

smalltalk.addMethod(
unescape('_updateReferencedClassesList'),
smalltalk.method({
selector: unescape('updateReferencedClassesList'),
fn: function (){
var self=this;
smalltalk.send(self['@referencedClassesList'], "_contents_", [(function(html){(function($rec){smalltalk.send($rec, "_class_", ["column_label"]);smalltalk.send($rec, "_with_", [smalltalk.send(smalltalk.send(unescape("Class%20references%20%28"), "__comma", [smalltalk.send(smalltalk.send(smalltalk.send(self, "_referencedClasses", []), "_size", []), "_asString", [])]), "__comma", [unescape("%29")])]);return smalltalk.send($rec, "_style_", [unescape("font-weight%3A%20bold")]);})(smalltalk.send(html, "_li", []));return smalltalk.send(smalltalk.send(self, "_referencedClasses", []), "_do_", [(function(each){return (function($rec){smalltalk.send($rec, "_with_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(each, "_methodClass", []), "_asString", []), "__comma", [unescape("%20%3E%3E%20")]), "__comma", [smalltalk.send(each, "_selector", [])])]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_openBrowserOn_", [each]);})]);})(smalltalk.send(html, "_li", []));})]);})]);
return self;}
}),
smalltalk.ReferencesBrowser);


smalltalk.addMethod(
unescape('_search_'),
smalltalk.method({
selector: unescape('search%3A'),
fn: function (aString){
var self=this;
return (function($rec){smalltalk.send($rec, "_searchReferencesFor_", [aString]);return smalltalk.send($rec, "_open", []);})(smalltalk.send(self, "_new", []));
return self;}
}),
smalltalk.ReferencesBrowser.klass);


smalltalk.addClass('Debugger', smalltalk.TabWidget, ['error', 'selectedContext', 'sourceArea', 'ul', 'ul2', 'inspector', 'saveButton', 'unsavedChanges', 'selectedVariable', 'selectedVariableName', 'inspectButton'], 'IDE');
smalltalk.addMethod(
unescape('_error'),
smalltalk.method({
selector: unescape('error'),
fn: function (){
var self=this;
return self['@error'];
return self;}
}),
smalltalk.Debugger);

smalltalk.addMethod(
unescape('_error_'),
smalltalk.method({
selector: unescape('error%3A'),
fn: function (anError){
var self=this;
(self['@error']=anError);
return self;}
}),
smalltalk.Debugger);

smalltalk.addMethod(
unescape('_label'),
smalltalk.method({
selector: unescape('label'),
fn: function (){
var self=this;
return unescape("%5BDebugger%5D");
return self;}
}),
smalltalk.Debugger);

smalltalk.addMethod(
unescape('_source'),
smalltalk.method({
selector: unescape('source'),
fn: function (){
var self=this;
return (($receiver = smalltalk.send(self, "_method", [])) == nil || $receiver == undefined) ? (function(){return unescape("Method%20doesn%27t%20exist%21");})() : (function(){return smalltalk.send(smalltalk.send(self, "_method", []), "_source", []);})();
return self;}
}),
smalltalk.Debugger);

smalltalk.addMethod(
unescape('_method'),
smalltalk.method({
selector: unescape('method'),
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(smalltalk.send(self['@selectedContext'], "_receiver", []), "_class", []), "_methodAt_", [smalltalk.send(self['@selectedContext'], "_selector", [])]);
return self;}
}),
smalltalk.Debugger);

smalltalk.addMethod(
unescape('_arguments'),
smalltalk.method({
selector: unescape('arguments'),
fn: function (){
var self=this;
return (($receiver = smalltalk.send(self, "_method", [])) == nil || $receiver == undefined) ? (function(){return smalltalk.send(smalltalk.send(self['@selectedContext'], "_temps", []), "_collect_", [(function(each){return nil;})]);})() : (function(){return smalltalk.send(smalltalk.send(self, "_method", []), "_arguments", []);})();
return self;}
}),
smalltalk.Debugger);

smalltalk.addMethod(
unescape('_receiver'),
smalltalk.method({
selector: unescape('receiver'),
fn: function (){
var self=this;
return smalltalk.send(self['@selectedContext'], "_receiver", []);
return self;}
}),
smalltalk.Debugger);

smalltalk.addMethod(
unescape('_selectContext_'),
smalltalk.method({
selector: unescape('selectContext%3A'),
fn: function (aContext){
var self=this;
(self['@selectedContext']=aContext);
(self['@selectedVariable']=nil);
(self['@selectedVariableName']=nil);
(function($rec){smalltalk.send($rec, "_updateContextsList", []);smalltalk.send($rec, "_updateSourceArea", []);smalltalk.send($rec, "_updateInspector", []);smalltalk.send($rec, "_updateVariablesList", []);return smalltalk.send($rec, "_updateStatus", []);})(self);
return self;}
}),
smalltalk.Debugger);

smalltalk.addMethod(
unescape('_proceed'),
smalltalk.method({
selector: unescape('proceed'),
fn: function (){
var self=this;
smalltalk.send(self, "_close", []);
smalltalk.send(smalltalk.send(self['@selectedContext'], "_receiver", []), "_perform_withArguments_", [smalltalk.send(self['@selectedContext'], "_selector", []), smalltalk.send(self['@selectedContext'], "_temps", [])]);
return self;}
}),
smalltalk.Debugger);

smalltalk.addMethod(
unescape('_save'),
smalltalk.method({
selector: unescape('save'),
fn: function (){
var self=this;
var protocol=nil;
(protocol=smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self['@selectedContext'], "_receiver", []), "_class", []), "_methodDictionary", []), "_at_", [smalltalk.send(self['@selectedContext'], "_selector", [])]), "_category", []));
smalltalk.send(smalltalk.send(smalltalk.send(self['@selectedContext'], "_receiver", []), "_class", []), "_compile_category_", [smalltalk.send(self['@sourceArea'], "_val", []), protocol]);
smalltalk.send(self, "_updateStatus", []);
return self;}
}),
smalltalk.Debugger);

smalltalk.addMethod(
unescape('_selectVariable_named_'),
smalltalk.method({
selector: unescape('selectVariable%3Anamed%3A'),
fn: function (anObject, aString){
var self=this;
(self['@selectedVariable']=anObject);
(self['@selectedVariableName']=aString);
smalltalk.send(self['@inspector'], "_contents_", [(function(html){return smalltalk.send(html, "_with_", [smalltalk.send(anObject, "_printString", [])]);})]);
smalltalk.send(self, "_updateVariablesList", []);
return self;}
}),
smalltalk.Debugger);

smalltalk.addMethod(
unescape('_inspectSelectedVariable'),
smalltalk.method({
selector: unescape('inspectSelectedVariable'),
fn: function (){
var self=this;
smalltalk.send(self['@selectedVariable'], "_inspect", []);
return self;}
}),
smalltalk.Debugger);

smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
fn: function (){
var self=this;
smalltalk.send(self, "_initialize", [], smalltalk.TabWidget);
smalltalk.send(self['@unsavedChanges'], "__eq", [false]);
return self;}
}),
smalltalk.Debugger);

smalltalk.addMethod(
unescape('_renderTopPanelOn_'),
smalltalk.method({
selector: unescape('renderTopPanelOn%3A'),
fn: function (html){
var self=this;
(self['@selectedContext']=smalltalk.send(smalltalk.send(self, "_error", []), "_context", []));
(function($rec){smalltalk.send($rec, "_class_", ["top"]);return smalltalk.send($rec, "_with_", [(function(){(function($rec){smalltalk.send($rec, "_class_", ["label"]);return smalltalk.send($rec, "_with_", [smalltalk.send(smalltalk.send(self, "_error", []), "_messageText", [])]);})(smalltalk.send(html, "_div", []));return (self['@ul']=(function($rec){smalltalk.send($rec, "_class_", ["jt_column debugger contexts"]);return smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(self, "_renderContext_on_", [smalltalk.send(smalltalk.send(self, "_error", []), "_context", []), html]);})]);})(smalltalk.send(html, "_ul", [])));})]);})(smalltalk.send(html, "_div", []));
return self;}
}),
smalltalk.Debugger);

smalltalk.addMethod(
unescape('_renderContext_on_'),
smalltalk.method({
selector: unescape('renderContext%3Aon%3A'),
fn: function (aContext, html){
var self=this;
var li=nil;
(li=smalltalk.send(html, "_li", []));
((($receiver = smalltalk.send(self['@selectedContext'], "__eq", [aContext])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(li, "_class_", ["selected"]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(li, "_class_", ["selected"]);})]));
(function($rec){smalltalk.send($rec, "_with_", [smalltalk.send(aContext, "_asString", [])]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_selectContext_", [aContext]);})]);})(li);
(($receiver = smalltalk.send(aContext, "_home", [])) != nil && $receiver != undefined) ? (function(){return smalltalk.send(self, "_renderContext_on_", [smalltalk.send(aContext, "_home", []), html]);})() : nil;
return self;}
}),
smalltalk.Debugger);

smalltalk.addMethod(
unescape('_renderBottomPanelOn_'),
smalltalk.method({
selector: unescape('renderBottomPanelOn%3A'),
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_class_", ["jt_sourceCode debugger"]);return smalltalk.send($rec, "_with_", [(function(){(self['@sourceArea']=smalltalk.send((smalltalk.SourceArea || SourceArea), "_new", []));return smalltalk.send(self['@sourceArea'], "_renderOn_", [html]);})]);})(smalltalk.send(html, "_div", []));
(self['@ul2']=smalltalk.send(smalltalk.send(html, "_ul", []), "_class_", ["jt_column debugger variables"]));
(self['@inspector']=smalltalk.send(smalltalk.send(html, "_div", []), "_class_", ["jt_column debugger inspector"]));
smalltalk.send(self['@sourceArea'], "_onKeyUp_", [(function(){return smalltalk.send(self, "_updateStatus", []);})]);
return self;}
}),
smalltalk.Debugger);

smalltalk.addMethod(
unescape('_renderButtonsOn_'),
smalltalk.method({
selector: unescape('renderButtonsOn%3A'),
fn: function (html){
var self=this;
(self['@saveButton']=(function($rec){smalltalk.send($rec, "_with_", ["Save"]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_save", []);})]);})(smalltalk.send(html, "_button", [])));
(function($rec){smalltalk.send($rec, "_with_", ["DoIt"]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self['@sourceArea'], "_doIt", []);})]);})(smalltalk.send(html, "_button", []));
(function($rec){smalltalk.send($rec, "_with_", ["PrintIt"]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self['@sourceArea'], "_printIt", []);})]);})(smalltalk.send(html, "_button", []));
(function($rec){smalltalk.send($rec, "_with_", ["InspectIt"]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self['@sourceArea'], "_inspectIt", []);})]);})(smalltalk.send(html, "_button", []));
(function($rec){smalltalk.send($rec, "_with_", ["Proceed"]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_proceed", []);})]);})(smalltalk.send(html, "_button", []));
(function($rec){smalltalk.send($rec, "_with_", ["Abandon"]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_close", []);})]);})(smalltalk.send(html, "_button", []));
(self['@inspectButton']=(function($rec){smalltalk.send($rec, "_class_", ["jt_button debugger inspect"]);smalltalk.send($rec, "_with_", ["Inspect"]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_inspectSelectedVariable", []);})]);})(smalltalk.send(html, "_button", [])));
(function($rec){smalltalk.send($rec, "_updateSourceArea", []);smalltalk.send($rec, "_updateStatus", []);smalltalk.send($rec, "_updateVariablesList", []);return smalltalk.send($rec, "_updateInspector", []);})(self);
return self;}
}),
smalltalk.Debugger);

smalltalk.addMethod(
unescape('_renderBoxOn_'),
smalltalk.method({
selector: unescape('renderBoxOn%3A'),
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_renderTopPanelOn_", [html]);return smalltalk.send($rec, "_renderBottomPanelOn_", [html]);})(self);
return self;}
}),
smalltalk.Debugger);

smalltalk.addMethod(
unescape('_canBeClosed'),
smalltalk.method({
selector: unescape('canBeClosed'),
fn: function (){
var self=this;
return true;
return self;}
}),
smalltalk.Debugger);

smalltalk.addMethod(
unescape('_updateContextsList'),
smalltalk.method({
selector: unescape('updateContextsList'),
fn: function (){
var self=this;
smalltalk.send(self['@ul'], "_contents_", [(function(html){return smalltalk.send(self, "_renderContext_on_", [smalltalk.send(smalltalk.send(self, "_error", []), "_context", []), html]);})]);
return self;}
}),
smalltalk.Debugger);

smalltalk.addMethod(
unescape('_updateSourceArea'),
smalltalk.method({
selector: unescape('updateSourceArea'),
fn: function (){
var self=this;
smalltalk.send(self['@sourceArea'], "_val_", [smalltalk.send(self, "_source", [])]);
return self;}
}),
smalltalk.Debugger);

smalltalk.addMethod(
unescape('_updateStatus'),
smalltalk.method({
selector: unescape('updateStatus'),
fn: function (){
var self=this;
((($receiver = smalltalk.send(smalltalk.send(self['@sourceArea'], "_val", []), "__eq", [smalltalk.send(self, "_source", [])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){(($receiver = self['@saveButton']) != nil && $receiver != undefined) ? (function(){return smalltalk.send(self['@saveButton'], "_at_put_", ["disabled", true]);})() : nil;return (self['@unsavedChanges']=false);})() : (function(){(($receiver = self['@saveButton']) != nil && $receiver != undefined) ? (function(){return smalltalk.send(self['@saveButton'], "_removeAt_", ["disabled"]);})() : nil;return (self['@unsavedChanges']=true);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){(($receiver = self['@saveButton']) != nil && $receiver != undefined) ? (function(){return smalltalk.send(self['@saveButton'], "_at_put_", ["disabled", true]);})() : nil;return (self['@unsavedChanges']=false);}), (function(){(($receiver = self['@saveButton']) != nil && $receiver != undefined) ? (function(){return smalltalk.send(self['@saveButton'], "_removeAt_", ["disabled"]);})() : nil;return (self['@unsavedChanges']=true);})]));
return self;}
}),
smalltalk.Debugger);

smalltalk.addMethod(
unescape('_updateInspector'),
smalltalk.method({
selector: unescape('updateInspector'),
fn: function (){
var self=this;
smalltalk.send(self['@inspector'], "_contents_", [(function(html){return nil;})]);
return self;}
}),
smalltalk.Debugger);

smalltalk.addMethod(
unescape('_updateVariablesList'),
smalltalk.method({
selector: unescape('updateVariablesList'),
fn: function (){
var self=this;
smalltalk.send(self['@ul2'], "_contents_", [(function(html){var li=nil;
(li=(function($rec){smalltalk.send($rec, "_with_", ["self"]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_selectVariable_named_", [smalltalk.send(self, "_receiver", []), "self"]);})]);})(smalltalk.send(html, "_li", [])));((($receiver = smalltalk.send(self['@selectedVariableName'], "__eq", ["self"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(li, "_class_", ["selected"]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(li, "_class_", ["selected"]);})]));smalltalk.send(smalltalk.send(self, "_arguments", []), "_withIndexDo_", [(function(each, index){var param=nil;
(param=smalltalk.send(smalltalk.send(self['@selectedContext'], "_temps", []), "_at_", [index]));(li=(function($rec){smalltalk.send($rec, "_with_", [each]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_selectVariable_named_", [param, each]);})]);})(smalltalk.send(html, "_li", [])));return ((($receiver = smalltalk.send(self['@selectedVariableName'], "__eq", [each])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(li, "_class_", ["selected"]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(li, "_class_", ["selected"]);})]));})]);return smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self, "_receiver", []), "_class", []), "_allInstanceVariableNames", []), "_do_", [(function(each){var ivar=nil;
(ivar=smalltalk.send(smalltalk.send(self, "_receiver", []), "_instVarAt_", [each]));(li=(function($rec){smalltalk.send($rec, "_with_", [each]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_selectVariable_named_", [ivar, each]);})]);})(smalltalk.send(html, "_li", [])));return ((($receiver = smalltalk.send(self['@selectedVariableName'], "__eq", [each])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(li, "_class_", ["selected"]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(li, "_class_", ["selected"]);})]));})]);})]);
(($receiver = self['@selectedVariable']) == nil || $receiver == undefined) ? (function(){return smalltalk.send(self['@inspectButton'], "_at_put_", ["disabled", true]);})() : (function(){return smalltalk.send(self['@inspectButton'], "_removeAt_", ["disabled"]);})();
return self;}
}),
smalltalk.Debugger);



smalltalk.addClass('ProgressBar', smalltalk.TabWidget, ['percent', 'progressDiv', 'div'], 'IDE');
smalltalk.addMethod(
unescape('_percent'),
smalltalk.method({
selector: unescape('percent'),
fn: function (){
var self=this;
return (($receiver = self['@percent']) == nil || $receiver == undefined) ? (function(){return (0);})() : $receiver;
return self;}
}),
smalltalk.ProgressBar);

smalltalk.addMethod(
unescape('_percent_'),
smalltalk.method({
selector: unescape('percent%3A'),
fn: function (aNumber){
var self=this;
(self['@percent']=aNumber);
return self;}
}),
smalltalk.ProgressBar);

smalltalk.addMethod(
unescape('_renderOn_'),
smalltalk.method({
selector: unescape('renderOn%3A'),
fn: function (html){
var self=this;
(self['@div']=(function($rec){smalltalk.send($rec, "_class_", ["progress_bar"]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(html, "_div", [])));
smalltalk.send(self, "_renderProgressBar", []);
return self;}
}),
smalltalk.ProgressBar);

smalltalk.addMethod(
unescape('_renderProgressBar'),
smalltalk.method({
selector: unescape('renderProgressBar'),
fn: function (){
var self=this;
smalltalk.send(self['@div'], "_contents_", [(function(html){return (function($rec){smalltalk.send($rec, "_class_", ["progress"]);return smalltalk.send($rec, "_style_", [smalltalk.send(smalltalk.send("width:", "__comma", [smalltalk.send(smalltalk.send(self, "_percent", []), "_asString", [])]), "__comma", [unescape("%25")])]);})(smalltalk.send(html, "_div", []));})]);
return self;}
}),
smalltalk.ProgressBar);

smalltalk.addMethod(
unescape('_updatePercent_'),
smalltalk.method({
selector: unescape('updatePercent%3A'),
fn: function (aNumber){
var self=this;
smalltalk.send(self, "_percent_", [aNumber]);
smalltalk.send(self, "_renderProgressBar", []);
return self;}
}),
smalltalk.ProgressBar);



smalltalk.addClass('TestRunner', smalltalk.TabWidget, ['selectedCategories', 'packagesList', 'selectedClasses', 'classesList', 'selectedMethods', 'progressBar', 'methodsList', 'result', 'statusDiv'], 'IDE');
smalltalk.addMethod(
unescape('_label'),
smalltalk.method({
selector: unescape('label'),
fn: function (){
var self=this;
return "SUnit";
return self;}
}),
smalltalk.TestRunner);

smalltalk.addMethod(
unescape('_packages'),
smalltalk.method({
selector: unescape('packages'),
fn: function (){
var self=this;
var packages=nil;
(packages=smalltalk.send((smalltalk.Array || Array), "_new", []));
smalltalk.send(smalltalk.send(self, "_allClasses", []), "_do_", [(function(each){return ((($receiver = smalltalk.send(packages, "_includes_", [smalltalk.send(each, "_category", [])])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(packages, "_add_", [smalltalk.send(each, "_category", [])]);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send(packages, "_add_", [smalltalk.send(each, "_category", [])]);})]));})]);
return smalltalk.send(packages, "_sort", []);
return self;}
}),
smalltalk.TestRunner);

smalltalk.addMethod(
unescape('_classes'),
smalltalk.method({
selector: unescape('classes'),
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(smalltalk.send(self, "_allClasses", []), "_select_", [(function(each){return smalltalk.send(smalltalk.send(self, "_selectedCategories", []), "_includes_", [smalltalk.send(each, "_category", [])]);})]), "_sort_", [(function(a, b){return ((($receiver = smalltalk.send(a, "_name", [])).klass === smalltalk.Number) ? $receiver >smalltalk.send(b, "_name", []) : smalltalk.send($receiver, "__gt", [smalltalk.send(b, "_name", [])]));})]);
return self;}
}),
smalltalk.TestRunner);

smalltalk.addMethod(
unescape('_selectedCategories'),
smalltalk.method({
selector: unescape('selectedCategories'),
fn: function (){
var self=this;
return (($receiver = self['@selectedCategories']) == nil || $receiver == undefined) ? (function(){return (self['@selectedCategories']=smalltalk.send((smalltalk.Array || Array), "_new", []));})() : $receiver;
return self;}
}),
smalltalk.TestRunner);

smalltalk.addMethod(
unescape('_allClasses'),
smalltalk.method({
selector: unescape('allClasses'),
fn: function (){
var self=this;
return smalltalk.send((smalltalk.TestCase || TestCase), "_allSubclasses", []);
return self;}
}),
smalltalk.TestRunner);

smalltalk.addMethod(
unescape('_selectedClasses'),
smalltalk.method({
selector: unescape('selectedClasses'),
fn: function (){
var self=this;
return (($receiver = self['@selectedClasses']) == nil || $receiver == undefined) ? (function(){return (self['@selectedClasses']=smalltalk.send((smalltalk.Array || Array), "_new", []));})() : $receiver;
return self;}
}),
smalltalk.TestRunner);

smalltalk.addMethod(
unescape('_progressBar'),
smalltalk.method({
selector: unescape('progressBar'),
fn: function (){
var self=this;
return (($receiver = self['@progressBar']) == nil || $receiver == undefined) ? (function(){return (self['@progressBar']=smalltalk.send((smalltalk.ProgressBar || ProgressBar), "_new", []));})() : $receiver;
return self;}
}),
smalltalk.TestRunner);

smalltalk.addMethod(
unescape('_statusInfo'),
smalltalk.method({
selector: unescape('statusInfo'),
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self, "_printTotal", []), "__comma", [smalltalk.send(self, "_printPasses", [])]), "__comma", [smalltalk.send(self, "_printErrors", [])]), "__comma", [smalltalk.send(self, "_printFailures", [])]);
return self;}
}),
smalltalk.TestRunner);

smalltalk.addMethod(
unescape('_result'),
smalltalk.method({
selector: unescape('result'),
fn: function (){
var self=this;
return self['@result'];
return self;}
}),
smalltalk.TestRunner);

smalltalk.addMethod(
unescape('_testCases'),
smalltalk.method({
selector: unescape('testCases'),
fn: function (){
var self=this;
var testCases=nil;
(testCases=[]);
smalltalk.send(smalltalk.send(self, "_selectedClasses", []), "_do_", [(function(each){return smalltalk.send(testCases, "_addAll_", [smalltalk.send(each, "_buildSuite", [])]);})]);
return testCases;
return self;}
}),
smalltalk.TestRunner);

smalltalk.addMethod(
unescape('_selectAllCategories'),
smalltalk.method({
selector: unescape('selectAllCategories'),
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self, "_packages", []), "_do_", [(function(each){return ((($receiver = smalltalk.send(self['@selectedCategories'], "_includes_", [each])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(smalltalk.send(self, "_selectedCategories", []), "_add_", [each]);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send(smalltalk.send(self, "_selectedCategories", []), "_add_", [each]);})]));})]);
(function($rec){smalltalk.send($rec, "_updateCategoriesList", []);return smalltalk.send($rec, "_updateClassesList", []);})(self);
return self;}
}),
smalltalk.TestRunner);

smalltalk.addMethod(
unescape('_toggleCategory_'),
smalltalk.method({
selector: unescape('toggleCategory%3A'),
fn: function (aCategory){
var self=this;
((($receiver = smalltalk.send(self, "_isSelectedCategory_", [aCategory])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(self['@selectedCategories'], "_add_", [aCategory]);})() : (function(){return smalltalk.send(self['@selectedCategories'], "_remove_", [aCategory]);})()) : smalltalk.send($receiver, "_ifFalse_ifTrue_", [(function(){return smalltalk.send(self['@selectedCategories'], "_add_", [aCategory]);}), (function(){return smalltalk.send(self['@selectedCategories'], "_remove_", [aCategory]);})]));
(function($rec){smalltalk.send($rec, "_updateCategoriesList", []);return smalltalk.send($rec, "_updateClassesList", []);})(self);
return self;}
}),
smalltalk.TestRunner);

smalltalk.addMethod(
unescape('_toggleClass_'),
smalltalk.method({
selector: unescape('toggleClass%3A'),
fn: function (aClass){
var self=this;
((($receiver = smalltalk.send(self, "_isSelectedClass_", [aClass])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(self['@selectedClasses'], "_add_", [aClass]);})() : (function(){return smalltalk.send(self['@selectedClasses'], "_remove_", [aClass]);})()) : smalltalk.send($receiver, "_ifFalse_ifTrue_", [(function(){return smalltalk.send(self['@selectedClasses'], "_add_", [aClass]);}), (function(){return smalltalk.send(self['@selectedClasses'], "_remove_", [aClass]);})]));
smalltalk.send(self, "_updateClassesList", []);
return self;}
}),
smalltalk.TestRunner);

smalltalk.addMethod(
unescape('_selectAllClasses'),
smalltalk.method({
selector: unescape('selectAllClasses'),
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self, "_classes", []), "_do_", [(function(each){return ((($receiver = smalltalk.send(self['@selectedClasses'], "_includes_", [each])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(smalltalk.send(self, "_selectedClasses", []), "_add_", [each]);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send(smalltalk.send(self, "_selectedClasses", []), "_add_", [each]);})]));})]);
(function($rec){smalltalk.send($rec, "_updateCategoriesList", []);return smalltalk.send($rec, "_updateClassesList", []);})(self);
return self;}
}),
smalltalk.TestRunner);

smalltalk.addMethod(
unescape('_run_'),
smalltalk.method({
selector: unescape('run%3A'),
fn: function (aCollection){
var self=this;
(self['@result']=smalltalk.send((smalltalk.TestResult || TestResult), "_new", []));
(function($rec){smalltalk.send($rec, "_updateStatusDiv", []);return smalltalk.send($rec, "_updateMethodsList", []);})(self);
smalltalk.send(smalltalk.send(self, "_progressBar", []), "_updatePercent_", [(0)]);
smalltalk.send(self['@result'], "_total_", [smalltalk.send(aCollection, "_size", [])]);
smalltalk.send(aCollection, "_do_", [(function(each){return smalltalk.send((function(){smalltalk.send(each, "_runCaseFor_", [self['@result']]);smalltalk.send(smalltalk.send(self, "_progressBar", []), "_updatePercent_", [((($receiver = ((($receiver = smalltalk.send(self['@result'], "_runs", [])).klass === smalltalk.Number) ? $receiver /smalltalk.send(self['@result'], "_total", []) : smalltalk.send($receiver, "__slash", [smalltalk.send(self['@result'], "_total", [])]))).klass === smalltalk.Number) ? $receiver *(100) : smalltalk.send($receiver, "__star", [(100)]))]);smalltalk.send(self, "_updateStatusDiv", []);return smalltalk.send(self, "_updateMethodsList", []);}), "_valueWithTimeout_", [(100)]);})]);
return self;}
}),
smalltalk.TestRunner);

smalltalk.addMethod(
unescape('_performFailure_'),
smalltalk.method({
selector: unescape('performFailure%3A'),
fn: function (aTestCase){
var self=this;
smalltalk.send(aTestCase, "_perform_", [smalltalk.send(aTestCase, "_selector", [])]);
return self;}
}),
smalltalk.TestRunner);

smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
fn: function (){
var self=this;
smalltalk.send(self, "_initialize", [], smalltalk.TabWidget);
(self['@result']=smalltalk.send((smalltalk.TestResult || TestResult), "_new", []));
return self;}
}),
smalltalk.TestRunner);

smalltalk.addMethod(
unescape('_printErrors'),
smalltalk.method({
selector: unescape('printErrors'),
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self, "_result", []), "_errors", []), "_size", []), "_asString", []), "__comma", [unescape("%20errors%2C%20")]);
return self;}
}),
smalltalk.TestRunner);

smalltalk.addMethod(
unescape('_printFailures'),
smalltalk.method({
selector: unescape('printFailures'),
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self, "_result", []), "_failures", []), "_size", []), "_asString", []), "__comma", [" failures"]);
return self;}
}),
smalltalk.TestRunner);

smalltalk.addMethod(
unescape('_printPasses'),
smalltalk.method({
selector: unescape('printPasses'),
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(((($receiver = ((($receiver = smalltalk.send(smalltalk.send(self, "_result", []), "_total", [])).klass === smalltalk.Number) ? $receiver -smalltalk.send(smalltalk.send(smalltalk.send(self, "_result", []), "_errors", []), "_size", []) : smalltalk.send($receiver, "__minus", [smalltalk.send(smalltalk.send(smalltalk.send(self, "_result", []), "_errors", []), "_size", [])]))).klass === smalltalk.Number) ? $receiver -smalltalk.send(smalltalk.send(smalltalk.send(self, "_result", []), "_failures", []), "_size", []) : smalltalk.send($receiver, "__minus", [smalltalk.send(smalltalk.send(smalltalk.send(self, "_result", []), "_failures", []), "_size", [])])), "_asString", []), "__comma", [unescape("%20passes%2C%20")]);
return self;}
}),
smalltalk.TestRunner);

smalltalk.addMethod(
unescape('_printTotal'),
smalltalk.method({
selector: unescape('printTotal'),
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self, "_result", []), "_total", []), "_asString", []), "__comma", [unescape("%20runs%2C%20")]);
return self;}
}),
smalltalk.TestRunner);

smalltalk.addMethod(
unescape('_renderBoxOn_'),
smalltalk.method({
selector: unescape('renderBoxOn%3A'),
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_renderCategoriesOn_", [html]);smalltalk.send($rec, "_renderClassesOn_", [html]);return smalltalk.send($rec, "_renderResultsOn_", [html]);})(self);
return self;}
}),
smalltalk.TestRunner);

smalltalk.addMethod(
unescape('_renderButtonsOn_'),
smalltalk.method({
selector: unescape('renderButtonsOn%3A'),
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_with_", ["Run selected"]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_run_", [smalltalk.send(self, "_testCases", [])]);})]);})(smalltalk.send(html, "_button", []));
return self;}
}),
smalltalk.TestRunner);

smalltalk.addMethod(
unescape('_renderCategoriesOn_'),
smalltalk.method({
selector: unescape('renderCategoriesOn%3A'),
fn: function (html){
var self=this;
(self['@packagesList']=smalltalk.send(smalltalk.send(html, "_ul", []), "_class_", ["jt_column sunit packages"]));
smalltalk.send(self, "_updateCategoriesList", []);
return self;}
}),
smalltalk.TestRunner);

smalltalk.addMethod(
unescape('_renderClassesOn_'),
smalltalk.method({
selector: unescape('renderClassesOn%3A'),
fn: function (html){
var self=this;
(self['@classesList']=smalltalk.send(smalltalk.send(html, "_ul", []), "_class_", ["jt_column sunit classes"]));
smalltalk.send(self, "_updateClassesList", []);
return self;}
}),
smalltalk.TestRunner);

smalltalk.addMethod(
unescape('_renderResultsOn_'),
smalltalk.method({
selector: unescape('renderResultsOn%3A'),
fn: function (html){
var self=this;
(self['@statusDiv']=smalltalk.send(html, "_div", []));
smalltalk.send(html, "_with_", [smalltalk.send(self, "_progressBar", [])]);
(self['@methodsList']=smalltalk.send(smalltalk.send(html, "_ul", []), "_class_", ["jt_column sunit results"]));
smalltalk.send(self, "_updateMethodsList", []);
smalltalk.send(self, "_updateStatusDiv", []);
return self;}
}),
smalltalk.TestRunner);

smalltalk.addMethod(
unescape('_renderFailuresOn_'),
smalltalk.method({
selector: unescape('renderFailuresOn%3A'),
fn: function (html){
var self=this;
smalltalk.send(smalltalk.send(smalltalk.send(self, "_result", []), "_failures", []), "_do_", [(function(each){return (function($rec){smalltalk.send($rec, "_class_", ["failures"]);smalltalk.send($rec, "_with_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(each, "_class", []), "_name", []), "__comma", [unescape("%20%3E%3E%20")]), "__comma", [smalltalk.send(each, "_selector", [])])]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_performFailure_", [each]);})]);})(smalltalk.send(html, "_li", []));})]);
return self;}
}),
smalltalk.TestRunner);

smalltalk.addMethod(
unescape('_renderErrorsOn_'),
smalltalk.method({
selector: unescape('renderErrorsOn%3A'),
fn: function (html){
var self=this;
smalltalk.send(smalltalk.send(smalltalk.send(self, "_result", []), "_errors", []), "_do_", [(function(each){return (function($rec){smalltalk.send($rec, "_class_", ["errors"]);smalltalk.send($rec, "_with_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(each, "_class", []), "_name", []), "__comma", [unescape("%20%3E%3E%20")]), "__comma", [smalltalk.send(each, "_selector", [])])]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_performFailure_", [each]);})]);})(smalltalk.send(html, "_li", []));})]);
return self;}
}),
smalltalk.TestRunner);

smalltalk.addMethod(
unescape('_isSelectedClass_'),
smalltalk.method({
selector: unescape('isSelectedClass%3A'),
fn: function (aClass){
var self=this;
return smalltalk.send(smalltalk.send(self, "_selectedClasses", []), "_includes_", [aClass]);
return self;}
}),
smalltalk.TestRunner);

smalltalk.addMethod(
unescape('_isSelectedCategory_'),
smalltalk.method({
selector: unescape('isSelectedCategory%3A'),
fn: function (aCategory){
var self=this;
return smalltalk.send(smalltalk.send(self, "_selectedCategories", []), "_includes_", [aCategory]);
return self;}
}),
smalltalk.TestRunner);

smalltalk.addMethod(
unescape('_updateCategoriesList'),
smalltalk.method({
selector: unescape('updateCategoriesList'),
fn: function (){
var self=this;
smalltalk.send(self['@packagesList'], "_contents_", [(function(html){(function($rec){smalltalk.send($rec, "_class_", ["all"]);smalltalk.send($rec, "_with_", ["All"]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_selectAllCategories", []);})]);})(smalltalk.send(html, "_li", []));return smalltalk.send(smalltalk.send(self, "_packages", []), "_do_", [(function(each){var li=nil;
(li=smalltalk.send(html, "_li", []));((($receiver = smalltalk.send(smalltalk.send(self, "_selectedCategories", []), "_includes_", [each])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(li, "_class_", ["selected"]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(li, "_class_", ["selected"]);})]));return (function($rec){smalltalk.send($rec, "_with_", [each]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_toggleCategory_", [each]);})]);})(li);})]);})]);
return self;}
}),
smalltalk.TestRunner);

smalltalk.addMethod(
unescape('_updateClassesList'),
smalltalk.method({
selector: unescape('updateClassesList'),
fn: function (){
var self=this;
smalltalk.send(self['@classesList'], "_contents_", [(function(html){((($receiver = smalltalk.send(smalltalk.send(self, "_selectedCategories", []), "_isEmpty", [])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return (function($rec){smalltalk.send($rec, "_class_", ["all"]);smalltalk.send($rec, "_with_", ["All"]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_selectAllClasses", []);})]);})(smalltalk.send(html, "_li", []));})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return (function($rec){smalltalk.send($rec, "_class_", ["all"]);smalltalk.send($rec, "_with_", ["All"]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_selectAllClasses", []);})]);})(smalltalk.send(html, "_li", []));})]));return smalltalk.send(smalltalk.send(self, "_classes", []), "_do_", [(function(each){var li=nil;
(li=smalltalk.send(html, "_li", []));((($receiver = smalltalk.send(smalltalk.send(self, "_selectedClasses", []), "_includes_", [each])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(li, "_class_", ["selected"]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(li, "_class_", ["selected"]);})]));return (function($rec){smalltalk.send($rec, "_with_", [smalltalk.send(each, "_name", [])]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_toggleClass_", [each]);})]);})(li);})]);})]);
return self;}
}),
smalltalk.TestRunner);

smalltalk.addMethod(
unescape('_updateMethodsList'),
smalltalk.method({
selector: unescape('updateMethodsList'),
fn: function (){
var self=this;
smalltalk.send(self['@methodsList'], "_contents_", [(function(html){smalltalk.send(self, "_renderErrorsOn_", [html]);return smalltalk.send(self, "_renderFailuresOn_", [html]);})]);
return self;}
}),
smalltalk.TestRunner);

smalltalk.addMethod(
unescape('_updateStatusDiv'),
smalltalk.method({
selector: unescape('updateStatusDiv'),
fn: function (){
var self=this;
smalltalk.send(self['@statusDiv'], "_class_", [smalltalk.send("sunit status ", "__comma", [smalltalk.send(self['@result'], "_status", [])])]);
smalltalk.send(self['@statusDiv'], "_contents_", [(function(html){return smalltalk.send(smalltalk.send(html, "_span", []), "_with_", [smalltalk.send(self, "_statusInfo", [])]);})]);
return self;}
}),
smalltalk.TestRunner);



smalltalk.addClass('IDETranscript', smalltalk.TabWidget, ['textarea'], 'IDE');
smalltalk.addMethod(
unescape('_label'),
smalltalk.method({
selector: unescape('label'),
fn: function (){
var self=this;
return "Transcript";
return self;}
}),
smalltalk.IDETranscript);

smalltalk.addMethod(
unescape('_clear'),
smalltalk.method({
selector: unescape('clear'),
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self['@textarea'], "_asJQuery", []), "_val_", [""]);
return self;}
}),
smalltalk.IDETranscript);

smalltalk.addMethod(
unescape('_cr'),
smalltalk.method({
selector: unescape('cr'),
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self['@textarea'], "_asJQuery", []), "_val_", [smalltalk.send(smalltalk.send(smalltalk.send(self['@textarea'], "_asJQuery", []), "_val", []), "__comma", [smalltalk.send((smalltalk.String || String), "_cr", [])])]);
return self;}
}),
smalltalk.IDETranscript);

smalltalk.addMethod(
unescape('_show_'),
smalltalk.method({
selector: unescape('show%3A'),
fn: function (anObject){
var self=this;
(($receiver = self['@textarea']) == nil || $receiver == undefined) ? (function(){return smalltalk.send(self, "_open", []);})() : $receiver;
smalltalk.send(smalltalk.send(self['@textarea'], "_asJQuery", []), "_val_", [smalltalk.send(smalltalk.send(smalltalk.send(self['@textarea'], "_asJQuery", []), "_val", []), "__comma", [smalltalk.send(anObject, "_asString", [])])]);
return self;}
}),
smalltalk.IDETranscript);

smalltalk.addMethod(
unescape('_open'),
smalltalk.method({
selector: unescape('open'),
fn: function (){
var self=this;
(function($rec){smalltalk.send($rec, "_open", []);return smalltalk.send($rec, "_selectTab_", [self]);})(smalltalk.send((smalltalk.TabManager || TabManager), "_current", []));
return self;}
}),
smalltalk.IDETranscript);

smalltalk.addMethod(
unescape('_renderBoxOn_'),
smalltalk.method({
selector: unescape('renderBoxOn%3A'),
fn: function (html){
var self=this;
(self['@textarea']=smalltalk.send(html, "_textarea", []));
(function($rec){smalltalk.send($rec, "_class_", ["jt_transcript"]);return smalltalk.send($rec, "_at_put_", ["spellcheck", "false"]);})(self['@textarea']);
return self;}
}),
smalltalk.IDETranscript);

smalltalk.addMethod(
unescape('_renderButtonsOn_'),
smalltalk.method({
selector: unescape('renderButtonsOn%3A'),
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_with_", ["Clear transcript"]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_clear", []);})]);})(smalltalk.send(html, "_button", []));
return self;}
}),
smalltalk.IDETranscript);


smalltalk.IDETranscript.klass.iVarNames = ['current'];
smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
fn: function (){
var self=this;
smalltalk.send((smalltalk.Transcript || Transcript), "_register_", [smalltalk.send(self, "_current", [])]);
return self;}
}),
smalltalk.IDETranscript.klass);

smalltalk.addMethod(
unescape('_new'),
smalltalk.method({
selector: unescape('new'),
fn: function (){
var self=this;
smalltalk.send(self, "_shouldNotImplement", []);
return self;}
}),
smalltalk.IDETranscript.klass);

smalltalk.addMethod(
unescape('_open'),
smalltalk.method({
selector: unescape('open'),
fn: function (){
var self=this;
(function($rec){smalltalk.send($rec, "_open", []);return smalltalk.send($rec, "_selectTab_", [smalltalk.send(self, "_current", [])]);})(smalltalk.send((smalltalk.TabManager || TabManager), "_current", []));
return self;}
}),
smalltalk.IDETranscript.klass);

smalltalk.addMethod(
unescape('_current'),
smalltalk.method({
selector: unescape('current'),
fn: function (){
var self=this;
return (($receiver = self['@current']) == nil || $receiver == undefined) ? (function(){return (self['@current']=smalltalk.send(self, "_new", [], smalltalk.TabWidget.klass));})() : $receiver;
return self;}
}),
smalltalk.IDETranscript.klass);


smalltalk.addMethod(
unescape('_inspect'),
smalltalk.method({
selector: unescape('inspect'),
fn: function (){
var self=this;
(function($rec){smalltalk.send($rec, "_inspect_", [self]);return smalltalk.send($rec, "_open", []);})(smalltalk.send((smalltalk.Inspector || Inspector), "_new", []));
return self;}
}),
smalltalk.Object);

smalltalk.addMethod(
unescape('_inspectOn_'),
smalltalk.method({
selector: unescape('inspectOn%3A'),
fn: function (anInspector){
var self=this;
var variables=nil;
(variables=smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", []));
smalltalk.send(variables, "_at_put_", [unescape("%23self"), self]);
smalltalk.send(smalltalk.send(smalltalk.send(self, "_class", []), "_allInstanceVariableNames", []), "_do_", [(function(each){return smalltalk.send(variables, "_at_put_", [each, smalltalk.send(self, "_instVarAt_", [each])]);})]);
(function($rec){smalltalk.send($rec, "_setLabel_", [smalltalk.send(self, "_printString", [])]);return smalltalk.send($rec, "_setVariables_", [variables]);})(anInspector);
return self;}
}),
smalltalk.Object);

smalltalk.addMethod(
unescape('_inspectOn_'),
smalltalk.method({
selector: unescape('inspectOn%3A'),
fn: function (anInspector){
var self=this;
var variables=nil;
(variables=smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", []));
smalltalk.send(variables, "_at_put_", [unescape("%23self"), self]);
smalltalk.send(variables, "_at_put_", [unescape("%23year"), smalltalk.send(self, "_year", [])]);
smalltalk.send(variables, "_at_put_", [unescape("%23month"), smalltalk.send(self, "_month", [])]);
smalltalk.send(variables, "_at_put_", [unescape("%23day"), smalltalk.send(self, "_day", [])]);
smalltalk.send(variables, "_at_put_", [unescape("%23hours"), smalltalk.send(self, "_hours", [])]);
smalltalk.send(variables, "_at_put_", [unescape("%23minutes"), smalltalk.send(self, "_minutes", [])]);
smalltalk.send(variables, "_at_put_", [unescape("%23seconds"), smalltalk.send(self, "_seconds", [])]);
smalltalk.send(variables, "_at_put_", [unescape("%23milliseconds"), smalltalk.send(self, "_milliseconds", [])]);
(function($rec){smalltalk.send($rec, "_setLabel_", [smalltalk.send(self, "_printString", [])]);return smalltalk.send($rec, "_setVariables_", [variables]);})(anInspector);
return self;}
}),
smalltalk.Date);

smalltalk.addMethod(
unescape('_inspectOn_'),
smalltalk.method({
selector: unescape('inspectOn%3A'),
fn: function (anInspector){
var self=this;
var variables=nil;
(variables=smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", []));
smalltalk.send(variables, "_at_put_", [unescape("%23self"), self]);
smalltalk.send(self, "_withIndexDo_", [(function(each, i){return smalltalk.send(variables, "_at_put_", [i, each]);})]);
(function($rec){smalltalk.send($rec, "_setLabel_", [smalltalk.send(self, "_printString", [])]);return smalltalk.send($rec, "_setVariables_", [variables]);})(anInspector);
return self;}
}),
smalltalk.Collection);

smalltalk.addMethod(
unescape('_inspectOn_'),
smalltalk.method({
selector: unescape('inspectOn%3A'),
fn: function (anInspector){
var self=this;
var label=nil;
smalltalk.send(self, "_inspectOn_", [anInspector], smalltalk.CharacterArray);
((($receiver = ((($receiver = smalltalk.send(smalltalk.send(self, "_printString", []), "_size", [])).klass === smalltalk.Number) ? $receiver >(30) : smalltalk.send($receiver, "__gt", [(30)]))).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (label=smalltalk.send(smalltalk.send(smalltalk.send(self, "_printString", []), "_copyFrom_to_", [(1), (30)]), "__comma", [unescape("...%27")]));})() : (function(){return (label=smalltalk.send(self, "_printString", []));})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return (label=smalltalk.send(smalltalk.send(smalltalk.send(self, "_printString", []), "_copyFrom_to_", [(1), (30)]), "__comma", [unescape("...%27")]));}), (function(){return (label=smalltalk.send(self, "_printString", []));})]));
smalltalk.send(anInspector, "_setLabel_", [label]);
return self;}
}),
smalltalk.String);

smalltalk.addMethod(
unescape('_inspectOn_'),
smalltalk.method({
selector: unescape('inspectOn%3A'),
fn: function (anInspector){
var self=this;
var variables=nil;
(variables=smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", []));
smalltalk.send(variables, "_at_put_", [unescape("%23self"), self]);
smalltalk.send(variables, "_at_put_", [unescape("%23home"), smalltalk.send(self, "_home", [])]);
smalltalk.send(variables, "_at_put_", [unescape("%23receiver"), smalltalk.send(self, "_receiver", [])]);
smalltalk.send(variables, "_at_put_", [unescape("%23selector"), smalltalk.send(self, "_selector", [])]);
smalltalk.send(variables, "_at_put_", [unescape("%23temps"), smalltalk.send(self, "_temps", [])]);
smalltalk.send(smalltalk.send(smalltalk.send(self, "_class", []), "_instanceVariableNames", []), "_do_", [(function(each){return smalltalk.send(variables, "_at_put_", [each, smalltalk.send(self, "_instVarAt_", [each])]);})]);
(function($rec){smalltalk.send($rec, "_setLabel_", [smalltalk.send(self, "_printString", [])]);return smalltalk.send($rec, "_setVariables_", [variables]);})(anInspector);
return self;}
}),
smalltalk.MethodContext);

smalltalk.addMethod(
unescape('_inspectOn_'),
smalltalk.method({
selector: unescape('inspectOn%3A'),
fn: function (anInspector){
var self=this;
var variables=nil;
(variables=smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", []));
smalltalk.send(variables, "_at_put_", [unescape("%23self"), self]);
smalltalk.send(variables, "_at_put_", [unescape("%23year"), smalltalk.send(self, "_year", [])]);
smalltalk.send(variables, "_at_put_", [unescape("%23month"), smalltalk.send(self, "_month", [])]);
smalltalk.send(variables, "_at_put_", [unescape("%23day"), smalltalk.send(self, "_day", [])]);
smalltalk.send(variables, "_at_put_", [unescape("%23hours"), smalltalk.send(self, "_hours", [])]);
smalltalk.send(variables, "_at_put_", [unescape("%23minutes"), smalltalk.send(self, "_minutes", [])]);
smalltalk.send(variables, "_at_put_", [unescape("%23seconds"), smalltalk.send(self, "_seconds", [])]);
smalltalk.send(variables, "_at_put_", [unescape("%23milliseconds"), smalltalk.send(self, "_milliseconds", [])]);
(function($rec){smalltalk.send($rec, "_setLabel_", [smalltalk.send(self, "_printString", [])]);return smalltalk.send($rec, "_setVariables_", [variables]);})(anInspector);
return self;}
}),
smalltalk.Date);

smalltalk.addMethod(
unescape('_inspectOn_'),
smalltalk.method({
selector: unescape('inspectOn%3A'),
fn: function (anInspector){
var self=this;
var variables=nil;
(variables=smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", []));
smalltalk.send(variables, "_at_put_", [unescape("%23self"), self]);
smalltalk.send(self['@elements'], "_withIndexDo_", [(function(each, i){return smalltalk.send(variables, "_at_put_", [i, each]);})]);
(function($rec){smalltalk.send($rec, "_setLabel_", [smalltalk.send(self, "_printString", [])]);return smalltalk.send($rec, "_setVariables_", [variables]);})(anInspector);
return self;}
}),
smalltalk.Set);

smalltalk.addMethod(
unescape('_inspectOn_'),
smalltalk.method({
selector: unescape('inspectOn%3A'),
fn: function (anInspector){
var self=this;
var variables=nil;
(variables=smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", []));
smalltalk.send(variables, "_at_put_", [unescape("%23self"), self]);
smalltalk.send(variables, "_at_put_", [unescape("%23keys"), smalltalk.send(self, "_keys", [])]);
smalltalk.send(self, "_keysAndValuesDo_", [(function(key, value){return smalltalk.send(variables, "_at_put_", [key, value]);})]);
(function($rec){smalltalk.send($rec, "_setLabel_", [smalltalk.send(self, "_printString", [])]);return smalltalk.send($rec, "_setVariables_", [variables]);})(anInspector);
return self;}
}),
smalltalk.HashedCollection);

