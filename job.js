
// #TODO: refactor Accordion to fireEvent onCompleted when animation finishes
// It probably should use chaining
var Sidebar = new Class({
Implements: [Options, Class.Occlude, Events],
parameter: "Sidebar",
options: {
DOM: '',
toggleSidebar: 'toggleSidebar'
},
initialize: function (options) {
this.setOptions(options);
if ($(this.options.DOM)) {
this.element = $(this.options.DOM);
if (this.occlude()) return this.occluded;
this.element.getFirst('.toggler').addClass('active');
this.accordion = new Fx.Accordion('#' + this.options.DOM + ' .toggler', '#' + this.options.DOM + ' .elementBody');
this.accordion.addEvent('active', function(toggler, element) {
toggler.addClass('active').getSiblings('.toggler').removeClass('active');
this.fireEvent('accordion_activated');
// 700 ms after launch the animation should be finished...
this.fireEvent('accordion_resized',[]);
}.bind(this));
var toggleSidebar = $(this.options.toggleSidebar);
if (toggleSidebar) {
if (Layout.isMobile){
toggleSidebar.show();
}
toggleSidebar.addEvent('click', this.toggle.bind(this));
}
this.reportAbuse.setup();
this.showJobs();
}
},
toElement: function() {
return this.element;
},
showJobs: function(){
var jobEl = document.id("job");
if (jobEl){
jobEl.set("styles", {
display: "block",
opacity: 0
});
var subs = "<h4>{title}</h4><h5>{job_type} at {company_name}</h5><p>{location}</p>";
var url = "http://jobs.jsfiddle.net/jobs/{url}";
new Request.JSONP({
url: "http://jobs.jsfiddle.net/random.js",
onSuccess: function(job){
if (job.id !== "undefined"){
jobEl.fade(1);
jobEl.set("html", subs.substitute(job));
