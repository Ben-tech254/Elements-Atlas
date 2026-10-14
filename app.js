/* LEARNING CONTENT
 * Each object describes one component. id connects it to demo() and bindDemo(); category drives filters.
 * aliases contains everyday search terms. use/compare/exercise teach the concept; behaviour becomes the copied prompt.
 * preview is trusted, author-written HTML for the gallery. Never insert unreviewed visitor content here. */
const components = [ {
  id:'navbar',
  name:'Navbar',
  category:'Navigation',
  description:'The signposts at the top of your website.',
  aliases:'header navigation top bar links hamburger menu',
  use:'Help visitors find the main sections of a website. Keep the most important destinations visible.',
  compare:'A navbar moves between pages or sections. Tabs switch related views within the same context.',
  behaviour:'Show Home, Learn, and Events links. Mark the current page. On small screens, use a clearly labelled menu button. Make every link keyboard accessible.',
  exercise:'Choose three destinations for a club website. Which deserves the most prominent link?',
  preview:'<div class="sample-nav"><b>atlas.</b><span>Home &nbsp; Learn &nbsp; <b>Join ↗</b></span></div>'
}
, {
  id:'tabs',
  name:'Tabs',
  category:'Navigation',
  description:'Switch views without leaving the page.',
  aliases:'switch views panels sections tabbed',
  use:'Organise a few related views, such as Overview and Details, in the same space.',
  compare:'Use navigation links for separate pages. Use an accordion when multiple sections should be readable together.',
  behaviour:'Provide Overview and Details tabs. Show one panel at a time and visibly mark the selected tab. Implement tab roles, matching panels, and arrow-key navigation.',
  exercise:'Decide whether a profile’s Posts and Saved views should use tabs or separate pages.',
  preview:'<div class="sample-tabs"><span class="chosen">Overview</span><span>Details</span><span>Activity</span></div>'
}
, {
  id:'dropdown',
  name:'Dropdown menu',
  category:'Navigation',
  description:'A little menu of actions, revealed on demand.',
  aliases:'three dots more options actions menu popup list',
  use:'Offer a small set of secondary actions without crowding the page.',
  compare:'A dropdown menu performs actions or navigation. A select chooses a form value.',
  behaviour:'Use a More actions button that opens Edit and Duplicate actions. Support Enter, Space, arrow keys, Escape, and closing outside the menu. Return focus to the trigger when dismissed.',
  exercise:'Pick two useful actions for a project card. Keep the main action outside the menu.',
  preview:'<div class="sample-menu"><b>More actions ···</b><br>✎ &nbsp; Edit project<br>▣ &nbsp; Duplicate</div>'
}
, {
  id:'input',
  name:'Text input',
  category:'Forms',
  description:'A place for someone to type an answer.',
  aliases:'text box field email name typing form',
  use:'Collect short information such as a name or email address.',
  compare:'Use a textarea for long responses and a select for a fixed set of choices. A placeholder does not replace a label.',
  behaviour:'Create a labelled email input with autocomplete=email. Validate on submission. Keep the entered value, show an inline error for an invalid email, and connect the error to the field for screen readers.',
  exercise:'Write a helpful error message that explains how to fix an invalid email.',
  preview:'<label>Email address</label><input placeholder="you@example.com" tabindex="-1">'
}
, {
  id:'select',
  name:'Select',
  category:'Forms',
  description:'Choose one answer from a set of options.',
  aliases:'dropdown choice options form pick one',
  use:'Collect a single value from known choices, such as a session topic.',
  compare:'A select stores a choice. A dropdown menu offers actions. For two or three choices, radio buttons may be easier to scan.',
  behaviour:'Create a labelled native select for a session topic, with a Choose a topic placeholder and AI, Robotics, and Web development options. Require a choice before submission.',
  exercise:'List three session topics and decide whether a select is the clearest way to display them.',
  preview:'<label>Session topic</label><select tabindex="-1"><option>Choose a topic ▾</option></select>'
}
, {
  id:'checkbox',
  name:'Checkbox',
  category:'Forms',
  description:'An independent yes or no choice.',
  aliases:'tick check agree opt in multiple selection',
  use:'Let users turn an option on or off, or choose multiple independent options.',
  compare:'Radio buttons select one option from a group. A checkbox can be selected independently.',
  behaviour:'Create an optional, initially unchecked checkbox labelled Send me session reminders. Clicking the label should toggle it. Explain that selecting it opts into reminders.',
  exercise:'Explain why optional marketing consent should not start checked.',
  preview:'<div style="background:white;padding:16px;border-radius:6px">☑ &nbsp; Send me session reminders</div>'
}
, {
  id:'button',
  name:'Button',
  category:'Forms',
  description:'The starting point for an action.',
  aliases:'call to action cta submit click loading disabled',
  use:'Trigger an action such as submitting a form, saving a change, or opening a dialog.',
  compare:'Use a link when taking someone to another address. Use a button when performing an action.',
  behaviour:'Create a Save changes button with idle, saving, and success states. Prevent repeated submission while saving, announce the result, and show a useful error if saving fails.',
  exercise:'Replace “Click here” with a label that tells the user exactly what happens.',
  preview:'<div style="display:flex;gap:10px;align-items:center"><button class="dark" tabindex="-1">Save changes ↗</button><button tabindex="-1">Cancel</button></div>'
}
, {
  id:'alert',
  name:'Inline alert',
  category:'Feedback',
  description:'A message that stays where it matters.',
  aliases:'warning banner notice inline message error information',
  use:'Show persistent context or an actionable problem near the relevant content.',
  compare:'A toast is temporary feedback. An alert dialog asks for a response and interrupts the flow.',
  behaviour:'Show a persistent informational message above the registration form: This session is online. A joining link will be sent after registration. Use text and an icon so meaning does not depend on colour.',
  exercise:'Decide whether a failed payment belongs in a lasting alert or a disappearing toast.',
  preview:'<div class="sample-alert"><b>ⓘ &nbsp; A quick heads-up</b><br>This session takes place online.</div>'
}
, {
  id:'toast',
  name:'Toast',
  category:'Feedback',
  description:'A short update that appears, then fades.',
  aliases:'notification snackbar saved success temporary message',
  use:'Confirm a completed, low-risk action without interrupting the task.',
  compare:'Use an inline alert for information that must stay visible. Critical errors should not disappear before users can act.',
  behaviour:'After copying a prompt, show a polite status message saying Prompt copied for four seconds. Do not move keyboard focus. If copying fails, provide a persistent manual-copy alternative.',
  exercise:'Name a situation where a disappearing notification would be unsafe or confusing.',
  preview:'<div class="sample-toast">✓ &nbsp; Your changes have been saved. <span style="float:right">×</span></div>'
}
, {
  id:'dialog',
  name:'Confirmation dialog',
  category:'Feedback',
  description:'Pause and confirm before a big action.',
  aliases:'popup before deleting modal confirm delete alert dialog',
  use:'Ask for an explicit response before a consequential action such as deleting a project.',
  compare:'A general dialog can contain forms or information. A confirmation dialog focuses on a decision and its consequences.',
  behaviour:'Before deleting a project, open a labelled confirmation dialog explaining the consequence. Include Cancel and Delete project. Focus Cancel first, contain keyboard focus, let Escape cancel, and return focus to the trigger. Only delete after confirmation.',
  exercise:'Write a confirmation message that names what is being deleted and whether it can be recovered.',
  preview:'<div class="sample-dialog"><b>Delete this project?</b><p>This action cannot be undone.</p><button tabindex="-1">Cancel</button> <button class="dark" tabindex="-1">Delete project</button></div>'
}
, {
  id:'card',
  name:'Card',
  category:'Content',
  description:'Related information, neatly grouped.',
  aliases:'box tile project preview container summary',
  use:'Group a project, event, or item’s title, description, and related action.',
  compare:'Cards are useful for browsing summaries. Tables are better when users need to compare many precise values.',
  behaviour:'Build an event card with a title, date, short description, and a clearly labelled View event link. Use a heading and avoid nested clickable elements. Stack cards on narrow screens.',
  exercise:'Choose the three pieces of information someone needs before opening an event.',
  preview:'<div class="sample-card"><span class="mini-tag">NEXT BUILD SESSION</span><p><b>Make your first website</b></p><span>Explore. Build. Share. &nbsp; ↗</span></div>'
}
, {
  id:'accordion',
  name:'Accordion',
  category:'Content',
  description:'Reveal the details when you need them.',
  aliases:'faq expand collapse questions answers disclosure',
  use:'Let people scan headings and expand supporting information, such as FAQs.',
  compare:'Tabs show alternative views. Accordions reveal information underneath a heading, and can allow multiple sections to stay open.',
  behaviour:'Build an FAQ with three accessible disclosure sections. Each heading toggles its own answer using native details and summary. Allow multiple answers open and keep headings descriptive.',
  exercise:'Choose information that should always be visible rather than hidden in an accordion.',
  preview:'<div class="sample-accordion"><b>Do I need coding experience?</b><span>+</span></div>'
}
];
/* DOM HELPER
 * $("#search") means document.querySelector("#search"): find an HTML element by its selector. */
const $ = selector => document.querySelector(selector);
/* PAGE STATE
 * category remembers the filter. lastTrigger remembers which control opened the dialog so focus can return.
 * toastTimer lets a new notification replace the previous timer. These values exist only in this browser tab. */
let category='All',lastTrigger=null,toastTimer;
const categories=['All','Navigation','Forms','Feedback','Content'];
/* Create the category buttons from one list. aria-pressed lets assistive technology announce the active filter. */
$('#filters').innerHTML=categories.map(c=>`<button type="button" data-category="${c}" aria-pressed="${c==='All'}" class="${c==='All'?'active':''}">${c}</button>`).join('');
/* REDRAW THE GALLERY
 * Apply category and search together, update the count, and show an empty state when nothing matches.
 * Only the gallery changes; the rest of the page stays in place. previewMarkup removes interactive controls from card illustrations. */
function render(){
  const query=$('#search').value.toLowerCase().trim();
  const list=components.filter(c=>(category==='All'||c.category===category)&&`${c.name} ${c.aliases} ${c.description} ${c.category}`.toLowerCase().includes(query));
  $('#result-count').textContent=`${list.length} component${list.length===1?'':'s'} to explore`;
  $('#empty').hidden=!!list.length;
  $('#grid').innerHTML=list.map(c=>`<button type="button" class="component-card" data-component="${c.id}" aria-label="Learn about ${c.name}"><div class="card-demo" aria-hidden="true"><div class="sample">${previewMarkup(c.preview)}</div></div><div class="card-copy"><p class="eyebrow">${c.category}</p><div class="card-title"><h3>${c.name}</h3><span aria-hidden="true">↗</span></div><p>${c.description}</p></div></button>`).join('');
}
/* USER ACTIONS
 * Listen on the filter container instead of attaching one listener to every button.
 * closest() finds the clicked button even when the user clicks something inside it. Search redraws as the user types. */
$('#filters').addEventListener('click',e=>{
  const b=e.target.closest('button');
  if(!b)return;
  category=b.dataset.category;
  $('#filters').querySelectorAll('button').forEach(x=>{
    x.classList.toggle('active',x===b);
    x.setAttribute('aria-pressed',String(x===b));
  }
  );
  render();
}
);
$('#search').addEventListener('input',render);
$('#reset').onclick=()=>{
  $('#search').value='';
  category='All';
  $('#filters button').click();
  $('#search').focus();
}
;
/* TOAST FEEDBACK
 * Update the existing role=status element. Clear the old timeout so repeated actions do not hide a newer message too early. */
function notify(message){
  clearTimeout(toastTimer);
  $('#toast').textContent=message;
  $('#toast').hidden=false;
  toastTimer=setTimeout(()=>$('#toast').hidden=true,
  4000);
}
/* TEXT SAFETY
 * Prompts are displayed as text. Escape HTML characters so a prompt cannot accidentally become page markup. */
function escapeHtml(value){
  return value.replace(/[&<>"']/g,
  c=>({
    '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'
  }
  [c]));
}
/* PROMPT BUILDER
 * Combine the selected component behaviour with a reusable project brief. Bracketed details are for the learner to replace. */
function promptFor(c){
  return `Build a ${c.name.toLowerCase()} for [describe your project and user].\n\nBehaviour: ${c.behaviour}\n\nMatch the project's existing styles and reuse its existing components where possible. Make it work on phones and with a keyboard.\n\nBefore changing code, identify the smallest change needed. After building, check the described behaviour and relevant error states. Explain what was verified. Do not add unrelated features.`;
}
/* PROMPT PANEL
 * The copy control and manual-copy error are shared by component guides and templates. */
function promptBox(prompt){
  return `<div class="prompt-box"><div class="prompt-heading"><h3>A better starting prompt</h3><button type="button" id="copy">Copy prompt ↗</button></div><pre id="prompt-text" tabindex="0">${escapeHtml(prompt)}</pre><p id="copy-error" class="error" hidden>Copying is unavailable. Select the prompt above and copy it manually.</p></div>`;
}
/* DEMO MARKUP
 * Choose the live example by component id. This creates controls; bindDemo() attaches their behaviour.
 * The native details/summary accordion works without custom JavaScript. All examples are simulations. */
function demo(c){
  switch(c.id){
    case'navbar':return '<nav aria-label="Demo navigation"><a href="#components" data-demo-nav>Components</a><a href="#templates" data-demo-nav>Templates</a><a href="#method" data-demo-nav>Prompting</a></nav><p>These links take you to a section of this guide.</p>';
    case'tabs':return '<div class="tab-buttons" role="tablist" aria-label="Event information"><button id="tab-overview" role="tab" aria-selected="true" aria-controls="tab-panel" data-tab="Overview">Overview</button><button id="tab-details" role="tab" aria-selected="false" aria-controls="tab-panel" tabindex="-1" data-tab="Details">Details</button></div><div id="tab-panel" role="tabpanel" aria-labelledby="tab-overview" tabindex="0">Learn by building a small website with a partner.</div>';
    case'dropdown':return '<button id="menu-trigger" aria-haspopup="menu" aria-expanded="false" aria-controls="live-menu">More actions ▾</button><div id="live-menu" class="live-menu" role="menu" hidden><button role="menuitem" tabindex="-1">Edit project</button><button role="menuitem" tabindex="-1">Duplicate project</button></div><p id="menu-result" role="status">Open the menu and choose an action.</p>';
    case'input':return '<form id="email-form" novalidate><label for="demo-email">Email address</label><input id="demo-email" type="email" autocomplete="email" required aria-describedby="email-status" placeholder="you@example.com"><p id="email-status" role="status">Try submitting an incomplete email.</p><button class="dark">Check email</button></form>';
    case'select':return '<label for="demo-select">Session topic</label><select id="demo-select"><option value="">Choose a topic</option><option>AI</option><option>Robotics</option><option>Web development</option></select><p id="select-status" role="status">Choose the topic you want to explore.</p>';
    case'checkbox':return '<label class="check-label" for="demo-check"><input type="checkbox" id="demo-check"> Send me session reminders</label><p id="check-status" role="status">Reminders are off. This demonstration stores nothing.</p>';
    case'button':return '<button class="dark" id="save-demo">Save changes</button><p id="save-status" role="status">Try the loading and success states. No data is saved.</p>';
    case'alert':return '<div class="sample-alert"><strong>ⓘ This session is online.</strong><p>A joining link will be sent after registration.</p></div><p>This information stays visible so someone can refer back to it.</p>';
    case'toast':return '<button id="toast-demo" class="dark">Show a success message</button><p>A status message appears at the bottom without interrupting you.</p>';
    case'dialog':return '<button id="delete-demo">Delete sample project</button><dialog id="confirm-dialog" aria-labelledby="confirm-title" aria-describedby="confirm-description"><h2 id="confirm-title">Delete sample project?</h2><p id="confirm-description">This removes the sample project from this demonstration. It does not delete any real data.</p><button id="cancel-delete" autofocus>Cancel</button> <button id="confirm-delete" class="dark">Delete project</button></dialog><p id="delete-status" role="status">Your sample project is still here.</p>';
    case'card':return '<article class="sample-card"><span class="eyebrow">ELIMIKA · DEMONSTRATION</span><h3>Make your first website</h3><p>A guided build session for curious beginners.</p><button id="card-action">View event ↗</button><p id="card-status" hidden>This is a sample event. Dates and booking details are examples only.</p></article>';
    case'accordion':return '<details><summary>Do I need coding experience?</summary><p>No. Start by learning the component names and describing the behaviour you need.</p></details><details><summary>Can I use any coding agent?</summary><p>Yes. Adapt the prompt to your project and the tools you already use.</p></details><details><summary>Will this always save tokens?</summary><p>Clearer instructions can reduce retries, but savings depend on your agent, context, and task.</p></details>';
  }
}
/* DIALOG LIFECYCLE
 * Remember the opener, insert fresh content, attach handlers, then open the native modal.
 * Binding follows insertion because the new controls do not exist beforehand. Focus starts on the close control. */
function openDialog(label,body,trigger,demoId){
  lastTrigger=trigger||document.activeElement;
  $('#detail-label').textContent=label;
  $('#detail-body').innerHTML=body;
  if(!$('#detail').open)$('#detail').showModal();
  $('#detail').scrollTop=0;
  $('#close').focus();
  bindCopy();
  if(demoId) bindDemo(demoId);
}
/* BUILD ONE GUIDE
 * Find its content object and combine explanation, demo, prompt, and exercise in the reusable dialog. */
function openComponent(id,trigger){
  const c=components.find(c=>c.id===id);
  openDialog(`${c.category} / COMPONENT GUIDE`,
  `<h2 class="detail-title">${c.name}</h2><p class="detail-intro">${c.description}</p><div class="demo-area"><p class="eyebrow">TRY IT YOURSELF</p>${demo(c)}</div><div class="guide-columns"><div><h3>When to use it</h3><p>${c.use}</p></div><div><h3>Know the difference</h3><p>${c.compare}</p></div></div>${promptBox(promptFor(c))}<p class="exercise"><strong>✳ Your turn</strong>${c.exercise}</p>`,
  trigger,
  c.id);
}
/* GALLERY EVENT DELEGATION
 * The grid listener keeps working after render() replaces all its cards. data-component identifies the selected entry. */
$('#grid').onclick=e=>{
  const b=e.target.closest('[data-component]');
  if(b)openComponent(b.dataset.component,
  b);
}
;
$('#close').onclick=()=>$('#detail').close();
$('#detail').addEventListener('close',()=>lastTrigger?.focus());
$('#detail').addEventListener('click',e=>{
  if(e.target===$('#detail')){
    const r=$('#detail').getBoundingClientRect();
    if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)$('#detail').close();
  }
}
);
/* CLIPBOARD WITH FALLBACK
 * Clipboard access may fail without HTTPS or permission. Select the text and show manual-copy instructions in that case. */
function bindCopy(){
  const b=$('#copy');
  if(!b)return;
  b.onclick=async()=>{
    try{
      await navigator.clipboard.writeText($('#prompt-text').textContent);
      b.textContent='Copied ✓';
      notify('Prompt copied. Replace the project details before sending.');
    }
    catch{
      $('#copy-error').hidden=false;
      const range=document.createRange();
      range.selectNodeContents($('#prompt-text'));
      const selection=window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
    }
  }
  ;
}
/* LIVE DEMO BEHAVIOUR
 * Only attach handlers for the currently displayed example. A handler is a function the browser runs after a user action. */
function bindDemo(id){
  if(id==='navbar')document.querySelectorAll('[data-demo-nav]').forEach(a=>a.onclick=()=>$('#detail').close());
  /* Tabs update both visible content and ARIA selection. Arrow/Home/End keys move through the available tabs. */
  if(id==='tabs'){
    const tabs=[...document.querySelectorAll('[data-tab]')];
    const activate=b=>{
      tabs.forEach(t=>{
        t.setAttribute('aria-selected',String(t===b));
        t.tabIndex=t===b?0:-1;
      }
      );
      $('#tab-panel').setAttribute('aria-labelledby',b.id);
      $('#tab-panel').textContent=b.dataset.tab==='Overview'?'Learn by building a small website with a partner.':'Bring a laptop and a small idea. This is demonstration content.';
    }
    ;
    tabs.forEach((b,i)=>{
      b.onclick=()=>activate(b);
      b.onkeydown=e=>{
        let next;
        if(e.key==='ArrowRight')next=tabs[(i+1)%tabs.length];
        if(e.key==='ArrowLeft')next=tabs[(i+tabs.length-1)%tabs.length];
        if(e.key==='Home')next=tabs[0];
        if(e.key==='End')next=tabs[tabs.length-1];
        if(next){
          e.preventDefault();
          activate(next);
          next.focus();
        }
      }
      ;
    }
    );
  }
  /* The menu tracks its open state and returns focus when dismissed. Keyboard users can move between actions. */
  if(id==='dropdown'){
    const trigger=$('#menu-trigger'),menu=$('#live-menu'),items=[...menu.querySelectorAll('button')];
    const close=()=>{
      menu.hidden=true;
      trigger.setAttribute('aria-expanded','false');
    }
    ;
    trigger.onclick=()=>{
      menu.hidden=!menu.hidden;
      trigger.setAttribute('aria-expanded',String(!menu.hidden));
      if(!menu.hidden)items[0].focus();
    }
    ;
    trigger.onkeydown=e=>{
      if(e.key==='ArrowDown'){
        e.preventDefault();
        menu.hidden=false;
        trigger.setAttribute('aria-expanded','true');
        items[0].focus();
      }
    }
    ;
    items.forEach((b,i)=>{
      b.onclick=()=>{
        $('#menu-result').textContent=`${b.textContent} selected. This is a demonstration.`;
        close();
        trigger.focus();
      }
      ;
      b.onkeydown=e=>{
        if(['ArrowDown','ArrowUp','Home','End'].includes(e.key)){
          e.preventDefault();
          items[e.key==='Home'?0:e.key==='End'?items.length-1:(i+(e.key==='ArrowDown'?1:items.length-1))%items.length].focus();
        }
        if(e.key==='Escape'){
          e.preventDefault();
          e.stopPropagation();
          close();
          trigger.focus();
        }
        if(e.key==='Tab')close();
      }
      ;
    }
    );
    $('#detail-body').addEventListener('click',e=>{
      if(!menu.contains(e.target)&&e.target!==trigger)close();
    }
    );
  }
  /* Prevent normal form submission: validate locally and explain errors without sending the email anywhere. */
  if(id==='input')$('#email-form').onsubmit=e=>{
    e.preventDefault();
    const valid=$('#demo-email').validity.valid;
    $('#demo-email').setAttribute('aria-invalid',String(!valid));
    $('#email-status').textContent=valid?'That email has a valid format. No data was sent.':'Enter a complete email address, such as name@example.com.';
    $('#email-status').className=valid?'success':'error';
  }
  ;
  /* A change event updates the selected-topic feedback. This does not save the choice. */
  if(id==='select')$('#demo-select').onchange=e=>$('#select-status').textContent=e.target.value?`Selected: ${e.target.value}`:'Choose a topic before continuing.';
  /* Read checked (a boolean) to announce whether the optional choice is on or off. */
  if(id==='checkbox')$('#demo-check').onchange=e=>$('#check-status').textContent=`Reminders are ${e.target.checked?'on':'off'}. This demonstration stores nothing.`;
  /* Simulate saving with a short delay. Disable duplicate clicks, then restore the button.
 * The isConnected check avoids updating controls that were removed while the learner changed guides. */
  if(id==='button')$('#save-demo').onclick=async e=>{
    const b=e.currentTarget,status=$('#save-status');
    b.disabled=true;
    b.textContent='Saving…';
    status.textContent='Saving sample changes…';
    await new Promise(r=>setTimeout(r,900));
    if(!b.isConnected)return;
    b.disabled=false;
    b.textContent='Save changes';
    status.textContent='Changes saved in this demonstration. No data was sent.';
  }
  ;
  /* Reuse the shared notification helper for the toast demonstration. */
  if(id==='toast')$('#toast-demo').onclick=()=>notify('✓ Sample changes saved successfully.');
  /* The nested native dialog contains the confirmation decision. Cancel and Escape preserve the sample project.
 * Only the confirm button changes the local status; no real deletion happens. */
  if(id==='dialog'){
    const d=$('#confirm-dialog'),trigger=$('#delete-demo');
    trigger.onclick=()=>d.showModal();
    $('#cancel-delete').onclick=()=>d.close();
    $('#confirm-delete').onclick=()=>{
      $('#delete-status').textContent='Sample project deleted. Open the guide again to reset it.';
      trigger.disabled=true;
      d.close();
    }
    ;
    d.addEventListener('close',()=>trigger.disabled?$('#close').focus():trigger.focus());
  }
  /* Reveal supporting information on demand. The hidden property controls whether that text is displayed. */
  if(id==='card')$('#card-action').onclick=()=>$('#card-status').hidden=!$('#card-status').hidden;
}
/* TEMPLATE CONTENT
 * Each parts entry links a named page section to an existing component guide. Change these prompts to add new use cases. */
const templates={
  landing:{
    title:'Simple landing page',intro:'A page that introduces one idea and invites visitors to take the next step.',parts:[['navbar','Navbar: help visitors reach About, Work, and Contact.'],['card','Cards: summarise three benefits or projects.'],['button','Call to action: describe the next step clearly. Use a link when it opens another page.']],prompt:'Build a responsive landing page for [your initiative]. Use a navbar with About, Work, and Contact links; a hero with a clear heading, short description, and primary call-to-action link; three benefit cards; and a contact footer. Use real content I provide and flag missing details. Stack the cards on mobile, keep heading levels logical, and make every interactive element keyboard accessible. Reuse existing project components. Do not add login, payments, or unrelated features. Verify all navigation links.'
  }
  ,
  event:{
    title:'Event registration page',intro:'A sample form that illustrates validation, consent, and submission feedback. It sends no data.',parts:[['input','Inputs: collect a name and email with visible labels.'],['select','Select: choose a session topic.'],['checkbox','Checkbox: optionally request reminders.'],['button','Button: submit once, with a loading state.'],['alert','Inline feedback: explain errors and confirm registration.']],prompt:'Build an event registration page for [event]. Show the event details I provide. Add labelled name and email inputs, a required session-topic select, and an optional unchecked reminders checkbox. Validate on submit, preserve entries after errors, prevent duplicate submissions, and show clear success or failure feedback. For this prototype, simulate submission and explicitly label it as a demo; do not store or send personal data. Make it responsive and keyboard accessible. Verify invalid email, missing topic, and successful submission. Do not add accounts or payments.'
  }
}
;
/* TEMPLATE VIEW
 * Compose the annotated layout and an optional form demonstration. Native required/email validation runs before submit.
 * The submit handler prevents a network request and shows simulated progress and completion. */
function openTemplate(key,trigger){
  const t=templates[key];
  const extra=key==='event'?'<div class="demo-area"><p class="eyebrow">DEMONSTRATION · NO DATA IS SENT</p><form id="event-form"><label for="event-name">Your name</label><input id="event-name" autocomplete="name" required><br><br><label for="event-email">Email address</label><input id="event-email" type="email" autocomplete="email" required><br><br><label for="event-topic">Session topic</label><select id="event-topic" required><option value="">Choose a topic</option><option>Web development</option><option>AI</option><option>Robotics</option></select><br><br><label class="check-label"><input type="checkbox"> Send me reminders (demo only)</label><button class="dark" id="event-submit">Try registration</button><p id="event-status" role="status"></p></form></div>':'<div class="demo-area"><p class="eyebrow">EXAMPLE STRUCTURE</p><p><strong>Navbar</strong> → Hero and call to action → Three benefit <strong>cards</strong> → Contact footer</p><p>Give your agent the content and intended next step before asking it to build the layout.</p></div>';
  openDialog('TEMPLATE / ANATOMY OF A PAGE',
  `<h2 class="detail-title">${t.title}</h2><p class="detail-intro">${t.intro}</p><ul class="annotation-list">${t.parts.map(([id,text])=>`<li><button data-part="${id}">${
    text.split(':')[0]
  }
  </button>:${
    text.split(':').slice(1).join(':')
  }
  </li>`).join('')}</ul>${extra}${promptBox(t.prompt)}`,
  trigger);
  document.querySelectorAll('[data-part]').forEach(b=>b.onclick=()=>openComponent(b.dataset.part,
  trigger));
  if(key==='event')$('#event-form').onsubmit=async e=>{
    e.preventDefault();
    const b=$('#event-submit'),status=$('#event-status');
    b.disabled=true;
    b.textContent='Submitting…';
    status.textContent='Trying the submission state…';
    await new Promise(r=>setTimeout(r,900));
    if(!b.isConnected)return;
    b.disabled=false;
    b.textContent='Try registration';
    status.textContent='Demo complete. Nothing was submitted or stored.';
    status.className='success';
  }
  ;
}
/* STARTUP
 * Connect template and hero controls, then render the initial gallery. The deferred script runs after the page exists. */
document.querySelectorAll('[data-template]').forEach(b=>b.onclick=()=>openTemplate(b.dataset.template,b));
$('#hero-demo').onclick=()=>openComponent('button',$('#hero-demo'));
render();
/* NON-INTERACTIVE GALLERY ILLUSTRATIONS
 * Cards are buttons, so their illustrations cannot contain nested buttons or form controls.
 * Convert this small, known set of author-written preview HTML into decorative spans/divs.
 * This is not a general-purpose sanitizer for untrusted HTML. */
function previewMarkup(html){
  return html.replace(/<button\b([^>]*)>/g,
  '<span class="preview-button"$1>').replace(/<\/button>/g,
  '</span>').replace(/<input[^>]*>/g,
  '<div class="preview-field">you@example.com</div>').replace(/<select[^>]*><option>(.*?)<\/option><\/select>/g,
  '<div class="preview-field">$1</div>').replace(/<label>/g,
  '<div class="preview-label">').replace(/<\/label>/g,
  '</div>');
}

/* Interactive learning tools. Only non-personal briefs and settings are stored locally. */
function readSaved(key,fallback){try{return JSON.parse(localStorage.getItem(key))??fallback;}catch{return fallback;}}
function saveLocal(key,value){try{localStorage.setItem(key,JSON.stringify(value));}catch{notify('Device storage unavailable. Changes last for this visit.');}}
let basket=readSaved('atlas-basket',[]); if(!Array.isArray(basket))basket=[]; basket=basket.filter(x=>x&&components.some(c=>c.id===x.id)&&typeof x.prompt==='string');
function drawBasket(){ $('#basket-count').textContent=basket.length; $('#basket').innerHTML=basket.length?basket.map(x=>'<div class="basket-row"><div><strong>'+escapeHtml(components.find(c=>c.id===x.id).name)+'</strong><p>'+escapeHtml(x.prompt)+'</p></div><button data-remove="'+x.id+'" aria-label="Remove '+escapeHtml(components.find(c=>c.id===x.id).name)+'">Remove</button></div>').join(''):'<p class="empty-basket">Your brief is empty. Open a component and select Add to brief.</p>'; }
$('#basket').onclick=e=>{const b=e.target.closest('[data-remove]');if(b){basket=basket.filter(x=>x.id!==b.dataset.remove);saveLocal('atlas-basket',basket);drawBasket();}};
$('#clear-brief').onclick=()=>{basket=[];saveLocal('atlas-basket',basket);drawBasket();$('#brief-output').textContent='';$('#copy-brief').hidden=true;};
$('#brief-project').value=readSaved('atlas-project',''); $('#brief-project').oninput=e=>saveLocal('atlas-project',e.target.value);
$('#export-brief').onclick=()=>{if(!basket.length){notify('Add at least one component to your brief.');return;}$('#brief-output').textContent='Build '+($('#brief-project').value.trim()||'[describe the project and audience]')+'.\n\n'+basket.map((x,i)=>(i+1)+'. '+x.prompt).join('\n\n')+'\n\nReuse existing styles and components. Support mobile layouts and keyboard navigation. Verify each behaviour and error state. Explain what was tested. Do not add unrelated features.';$('#copy-brief').hidden=false;};
$('#copy-brief').onclick=async()=>{try{await navigator.clipboard.writeText($('#brief-output').textContent);$('#brief-copy-status').textContent='Project prompt copied.';}catch{$('#brief-copy-status').textContent='Select the project prompt and copy it manually.';}};
$('#side-components').innerHTML=components.map(c=>'<button data-side="'+c.id+'">'+c.name+'</button>').join('');$('#side-components').onclick=e=>{const b=e.target.closest('[data-side]');if(b)openComponent(b.dataset.side,b);};
const originalOpenComponent=openComponent;
openComponent=function(id,trigger){originalOpenComponent(id,trigger);const c=components.find(c=>c.id===id);const panel=document.createElement('section');panel.className='playground';panel.innerHTML='<div class="play-heading"><div><p class="eyebrow">MAKE IT YOURS</p><h3>Playground & prompt builder</h3></div><span class="badge">Live preview</span></div><div class="builder-grid"><label>Project or audience<input id="builder-project" placeholder="A student club website"></label><label>Desired behaviour<textarea id="builder-behaviour" rows="4"></textarea></label><label>What should happen if it fails?<input id="builder-error" placeholder="Explain the problem and allow retry"></label><label>How will you check it works?<input id="builder-check" placeholder="Try success, cancel, and error states"></label></div><div id="component-settings"></div><div class="brief-actions"><button id="reset-demo">Reset demonstration</button><button id="add-brief" class="primary">Add to brief +</button></div><p id="builder-status" role="status"></p>';
$('#detail-body').insertBefore(panel,$('.prompt-box'));$('#builder-behaviour').value=c.behaviour;
const settings=$('#component-settings');
if(id==='button')settings.innerHTML='<label>Button label<input id="setting-label" value="Save changes"></label><label>Simulated result<select id="setting-result"><option value="success">Success</option><option value="error">Failure</option></select></label>';
if(id==='toast')settings.innerHTML='<label>Notification message<input id="setting-label" value="Sample changes saved successfully."></label><label>Duration<select id="setting-duration"><option value="2000">2 seconds</option><option value="4000" selected>4 seconds</option><option value="8000">8 seconds</option></select></label>';
if(id==='dialog')settings.innerHTML='<label>Item to delete<input id="setting-label" value="sample project"></label>';
if(id==='accordion')settings.innerHTML='<label>Expansion mode<select id="setting-mode"><option value="multiple">Multiple answers open</option><option value="single">One answer at a time</option></select></label>';
if(id==='input')settings.innerHTML='<label>Field required<select id="setting-required"><option value="yes">Required</option><option value="no">Optional</option></select></label>';
function updatePrompt(){let p='Build a '+c.name.toLowerCase()+' for '+($('#builder-project').value.trim()||'[project and audience]')+'.\n\nBehaviour: '+$('#builder-behaviour').value.trim();if($('#setting-label'))p+='\nLabel or message: '+$('#setting-label').value;if($('#setting-result'))p+='\nDemonstrate the '+$('#setting-result').value+' state.';if($('#setting-duration'))p+='\nNotification duration: '+Number($('#setting-duration').value)/1000+' seconds.';if($('#setting-mode'))p+='\nAccordion mode: '+$('#setting-mode').selectedOptions[0].textContent;if($('#setting-required'))p+='\nField requirement: '+$('#setting-required').selectedOptions[0].textContent;p+='\nFailure handling: '+($('#builder-error').value||'Provide clear feedback and preserve user input.')+'\nVerification: '+($('#builder-check').value||'Check keyboard access, mobile layout, and expected states.')+'\nReuse existing styles. Do not add unrelated features.';$('#prompt-text').textContent=p;$('#copy').textContent='Copy prompt ↗';$('#copy-error').hidden=true;}
function configureDemo(){if(id==='button'){const b=$('#save-demo');b.textContent=$('#setting-label').value||'Save changes';b.onclick=async()=>{const status=$('#save-status'),label=b.textContent,fail=$('#setting-result').value==='error';b.disabled=true;b.textContent='Saving…';status.textContent='Saving sample changes…';await new Promise(r=>setTimeout(r,900));if(!b.isConnected)return;b.disabled=false;b.textContent=label;status.textContent=fail?'Save failed. Your changes are preserved. Try again.':'Sample changes saved. No data was sent.';status.className=fail?'error':'success';};}if(id==='toast')$('#toast-demo').onclick=()=>{notify($('#setting-label').value||'Done');clearTimeout(toastTimer);toastTimer=setTimeout(()=>$('#toast').hidden=true,Number($('#setting-duration').value));};if(id==='dialog'){$('#confirm-title').textContent='Delete '+($('#setting-label').value||'sample project')+'?';}if(id==='input')$('#demo-email').required=$('#setting-required').value==='yes';if(id==='accordion')document.querySelectorAll('.demo-area details').forEach(d=>{d.ontoggle=()=>{if(d.open&&$('#setting-mode')?.value==='single')document.querySelectorAll('.demo-area details').forEach(other=>{if(other!==d)other.open=false;});};});}
$('#reset-demo').onclick=()=>{const area=$('.demo-area');area.innerHTML='<p class="eyebrow">TRY IT YOURSELF</p>'+demo(c);bindDemo(id);configureDemo();};panel.addEventListener('input',()=>{updatePrompt();configureDemo();});panel.addEventListener('change',()=>{updatePrompt();configureDemo();});$('#add-brief').onclick=()=>{basket=basket.filter(x=>x.id!==id);basket.push({id,prompt:$('#prompt-text').textContent});saveLocal('atlas-basket',basket);drawBasket();$('#builder-status').textContent=c.name+' added. Open Build brief to combine your components.';};updatePrompt();configureDemo();};
const challenges=[{q:'A user is about to delete a project. They need to explicitly confirm.',options:['dialog','toast','alert'],answer:'dialog',why:'A confirmation dialog asks for a decision before a consequential action. Cancel must preserve the project.'},{q:'You need to confirm a successful copy without interrupting the user.',options:['alert','toast','dialog'],answer:'toast',why:'A toast gives temporary, low-risk feedback without moving focus.'},{q:'Users need to choose one session topic in a form.',options:['dropdown','checkbox','select'],answer:'select',why:'A select collects a form value. A dropdown menu offers actions.'},{q:'A failed payment needs a message users can refer back to.',options:['toast','alert','card'],answer:'alert',why:'An inline alert stays visible so the user can understand and resolve the problem.'},{q:'Readers want to expand several FAQ answers independently.',options:['tabs','accordion','navbar'],answer:'accordion',why:'An accordion reveals information under headings and can keep multiple answers open.'},{q:'Visitors need to move between the main sections of a website.',options:['navbar','tabs','button'],answer:'navbar',why:'Navigation links connect pages or sections. Tabs switch related views in one context.'}];let challengeIndex=0,answered=false,score=0;
function drawChallenge(){answered=false;const c=challenges[challengeIndex];$('#challenge-box').innerHTML='<div class="challenge-top"><span class="badge">Question '+(challengeIndex+1)+' / '+challenges.length+'</span><span>'+score+' correct</span></div><h3>'+c.q+'</h3><div class="challenge-options">'+c.options.map(id=>'<button data-answer="'+id+'">'+components.find(x=>x.id===id).name+'</button>').join('')+'</div><p id="challenge-feedback" role="status"></p><button id="next-challenge" hidden>'+(challengeIndex===challenges.length-1?'Try again':'Next question →')+'</button>';$('#next-challenge').onclick=()=>{challengeIndex++;if(challengeIndex===challenges.length){challengeIndex=0;score=0;}drawChallenge();};}
$('#challenge-box').onclick=e=>{const b=e.target.closest('[data-answer]');if(!b||answered)return;answered=true;const c=challenges[challengeIndex],correct=b.dataset.answer===c.answer;if(correct)score++;$('#challenge-feedback').textContent=(correct?'Correct. ':'The best fit is '+components.find(x=>x.id===c.answer).name+'. ')+c.why;$('#challenge-feedback').className=correct?'success':'error';document.querySelectorAll('[data-answer]').forEach(x=>{x.disabled=true;x.classList.toggle('correct',x.dataset.answer===c.answer);});$('#next-challenge').hidden=false;};
document.querySelectorAll('[data-anatomy]').forEach(b=>b.onclick=()=>{const c=components.find(x=>x.id===b.dataset.anatomy);$('#anatomy-info').textContent=c.name+': '+c.use;openComponent(c.id,b);});
const themeButton=$('#theme-toggle');if(themeButton){document.documentElement.dataset.theme=readSaved('atlas-theme','light');themeButton.onclick=()=>{const dark=document.documentElement.dataset.theme!=='dark';document.documentElement.dataset.theme=dark?'dark':'light';themeButton.setAttribute('aria-pressed',String(dark));saveLocal('atlas-theme',dark?'dark':'light');};}
drawBasket();drawChallenge();
