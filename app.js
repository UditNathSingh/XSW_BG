(() => {
  'use strict';

  const logo = () => `
    <a class="logo" href="index.html" aria-label="XRemoveBG home">
      <img src="assets/logo_128.webp?v=20261028_v1" width="34" height="34" alt="XRemoveBG logo" class="logo-mark" aria-hidden="true">
      <span>XRemove<span>BG</span></span>
    </a>`;

  const infoButton = (key, label) => `<button type="button" data-info="${key}">${label}</button>`;
  const homeNav = `
    <div class="relative">
      <button type="button" data-dropdown-toggle aria-expanded="false">Tools <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg></button>
      <div class="absolute left-0 top-11 hidden w-48 rounded-xl border border-gray-100 bg-white p-2 shadow-xl" data-dropdown-menu>
        <a class="flex min-h-[42px] items-center rounded-lg px-3 text-sm hover:bg-blue-50" href="upload.html">Background removal</a>
        <a class="flex min-h-[42px] items-center rounded-lg px-3 text-sm hover:bg-blue-50" href="index.html#prompts">Prompt Studio</a>
        <a class="flex min-h-[42px] items-center rounded-lg px-3 text-sm hover:bg-blue-50" href="index.html#quality">Quality samples</a>
      </div>
    </div>
    ${infoButton('bulk','Bulk Editing')}${infoButton('api','API')}${infoButton('plugins','Plugins')}${infoButton('pricing','Pricing')}`;
  const uploadNav = `<a href="upload.html">Uploads</a>${infoButton('bulk','Bulk Editing')}${infoButton('api','API')}${infoButton('plugins','Plugins')}${infoButton('pricing','Pricing')}`;
  const legalNav = `<a href="index.html#features">Tools</a>${infoButton('api','API')}${infoButton('pricing','Pricing')}<a href="index.html#blog">Blog</a>${infoButton('help','Help')}`;

  function renderHeader() {
    document.querySelectorAll('[data-site-header]').forEach((mount) => {
      if (mount.querySelector('header.site-header')) return;
      const variant = mount.dataset.siteHeader;
      const nav = variant === 'home' ? homeNav : (variant === 'legal' || variant === 'terms' ? legalNav : uploadNav);
      mount.innerHTML = `
        <header class="site-header">
          <div class="site-container-wide site-header-inner">
            ${logo()}
            <nav class="desktop-nav" aria-label="Main navigation">${nav}</nav>
            <div class="header-actions">
              <button type="button" class="login-link" data-auth="login">Log in</button>
              <button type="button" class="btn-primary signup-link" data-auth="signup">Sign up</button>
              <button type="button" class="icon-button mobile-menu-button lg:hidden" data-mobile-toggle aria-expanded="false" aria-label="Open navigation menu">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 7h16M4 12h16M4 17h16"/></svg>
              </button>
            </div>
          </div>
          <nav class="mobile-menu" data-mobile-menu aria-label="Mobile navigation">
            <a href="upload.html">Uploads</a><a href="index.html#features">Tools</a>
            ${infoButton('bulk','Bulk Editing')}${infoButton('api','API')}${infoButton('plugins','Plugins')}${infoButton('pricing','Pricing')}
            <a href="index.html#blog">Blog</a>${infoButton('help','Help')}
            <button type="button" data-auth="login">Log in</button><a href="terms-of-service.html">Terms</a>
          </nav>
        </header>`;
    });
  }

  const social = {
    facebook: '<svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M14 8h3V4h-3c-3 0-5 2-5 5v3H6v4h3v6h4v-6h3l1-4h-4V9c0-.6.4-1 1-1Z"/></svg>',
    instagram: '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>',
    x: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3l-4.9-6.4L6.4 22H3.3l7.3-8.3L1.6 2H8l4.4 5.8L18.9 2Zm-1.1 18h1.7L7.1 3.9H5.3L17.8 20Z"/></svg>',
    youtube: '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M23 12s0-4-.5-5.8c-.3-1-1-1.7-2-2C18.7 3.7 12 3.7 12 3.7s-6.7 0-8.5.5c-1 .3-1.7 1-2 2C1 8 1 12 1 12s0 4 .5 5.8c.3 1 1 1.7 2 2 1.8.5 8.5.5 8.5.5s6.7 0 8.5-.5c1-.3 1.7-1 2-2C23 16 23 12 23 12ZM9.8 15.5v-7l6 3.5-6 3.5Z"/></svg>',
    github: '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.9c-2.8.6-3.4-1.2-3.4-1.2-.4-1.1-1.1-1.4-1.1-1.4-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.4 1.1 3 .8.1-.7.4-1.1.6-1.4-2.2-.2-4.6-1.1-4.6-4.9 0-1.1.4-2 1-2.7-.1-.2-.4-1.2.1-2.6 0 0 .8-.3 2.7 1a9.5 9.5 0 0 1 5 0c1.9-1.3 2.7-1 2.7-1 .5 1.4.2 2.4.1 2.6.6.7 1 1.6 1 2.7 0 3.8-2.4 4.7-4.6 4.9.4.3.7.9.7 1.9V21c0 .3.2.6.7.5A10 10 0 0 0 12 2Z"/></svg>'
  };

  function renderFooter() {
    document.querySelectorAll('[data-site-footer]').forEach((mount) => {
      if (mount.querySelector('footer.footer-card')) return;
      const showCta = mount.dataset.siteFooter !== 'no-cta';
      const ctaHtml = showCta ? `
        <div class="cta-banner-wrapper">
          <div class="cta-banner">
            <div class="cta-badge">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="m13 2-9 12h7l-1 8 9-12h-7l1-8Z"/></svg>
              <span>AI Powered</span>
            </div>
            <h2>Remove image<br><span>backgrounds in seconds.</span></h2>
            <p>Upload your image and get a transparent background instantly<br class="hidden sm:inline"> with AI. Fast, accurate and 100% easy to use.</p>
            <button type="button" class="cta-btn" data-upload-trigger aria-label="Upload Image">
              <span>Upload Image</span>
              <span aria-hidden="true">→</span>
            </button>
            <div class="cta-note">No credit card required.</div>
          </div>
        </div>` : '';

      mount.innerHTML = `
        <section class="footer-section">
          <div class="site-container-wide">
            ${ctaHtml}
            <footer class="footer-card${showCta ? '' : ' footer-card-no-cta'}">
              <div class="footer-card-inner">
                <div class="footer-top">
                  <div class="footer-watermark" aria-hidden="true">XBG</div>
                  <div class="footer-copyright">
                    <div>All Rights Reserved.</div>
                    <div>© 2026 XRemoveBG, a premium SaaS template</div>
                  </div>
                </div>
                <div class="footer-divider"></div>
                <div class="footer-grid">
                  <div class="footer-brand">
                    <a class="footer-logo" href="index.html" aria-label="XRemoveBG home">
                      <img src="assets/logo_128.webp?v=20261028_v1" width="34" height="34" alt="XRemoveBG logo" class="logo-mark" aria-hidden="true">
                    </a>
                    <p>XRemoveBG gives you the tools you need to create a truly stunning visual with AI. Fast, accurate and easy to use.</p>
                    <div class="footer-socials">
                      <a class="social-link bg-[#1877f2]" href="https://www.facebook.com" target="_blank" rel="noopener" aria-label="Facebook">${social.facebook}</a>
                      <a class="social-link bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600" href="https://www.instagram.com" target="_blank" rel="noopener" aria-label="Instagram">${social.instagram}</a>
                      <a class="social-link bg-black" href="https://x.com" target="_blank" rel="noopener" aria-label="X">${social.x}</a>
                      <a class="social-link bg-[#f00]" href="https://www.youtube.com" target="_blank" rel="noopener" aria-label="YouTube">${social.youtube}</a>
                      <a class="social-link bg-[#181717]" href="https://github.com" target="_blank" rel="noopener" aria-label="GitHub">${social.github}</a>
                    </div>
                  </div>
                  <div class="footer-column">
                    <h3>Product</h3>
                    <a class="!text-brand font-semibold" href="index.html">Landing Page</a>
                    <a href="index.html#features">Features</a>
                    ${infoButton('pricing','Pricing')}
                    ${infoButton('api','API')}
                    ${infoButton('changelog','Changelog')}
                  </div>
                  <div class="footer-column">
                    <h3>Company</h3>
                    ${infoButton('about','About')}
                    <a href="index.html#blog">Blog</a>
                    <a href="privacy-policy.html">Privacy Policy</a>
                    <a href="terms-of-service.html">Terms of Service</a>
                    <a href="general-terms-and-conditions.html">General Terms</a>
                    <a href="404.html">Error - 404</a>
                  </div>
                  <div class="footer-column">
                    <h3>Support</h3>
                    <a href="mailto:support@xremovebg.com">Contact</a>
                    <a href="mailto:support@xremovebg.com?subject=Request%20a%20demo">Request Demo</a>
                    ${infoButton('integrations','Integration')}
                    <a href="index.html#testimonials">Case Study</a>
                    ${infoButton('help','Help Center')}
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </section>`;
    });
  }

  function createDialog() {
    const dialog = document.createElement('dialog');
    dialog.className = 'site-dialog';
    dialog.id = 'site-dialog';
    dialog.innerHTML = `<div class="dialog-header"><h2 id="dialog-title"></h2><button type="button" class="icon-button dialog-close" data-dialog-close aria-label="Close dialog"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 6 12 12M18 6 6 18"/></svg></button></div><div class="dialog-body" id="dialog-body"></div>`;
    document.body.appendChild(dialog);
    dialog.addEventListener('click', (event) => {
      if (event.target !== dialog) return;
      const rect = dialog.getBoundingClientRect();
      if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
    });
    return dialog;
  }

  renderHeader();
  renderFooter();
  const dialog = createDialog();
  const dialogTitle = dialog.querySelector('#dialog-title');
  const dialogBody = dialog.querySelector('#dialog-body');
  let currentObjectUrl = null;
  let currentPrompt = '';

  const escapeHTML = (value) => String(value).replace(/[&<>'"]/g, (char) => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[char]));
  const openDialog = (title, content) => {
    dialogTitle.textContent = title;
    dialogBody.innerHTML = content;
    if (!dialog.open) dialog.showModal();
    dialog.scrollTop = 0;
  };
  const closeDialog = () => dialog.close();
  dialog.addEventListener('close', () => {
    if (currentObjectUrl) {
      URL.revokeObjectURL(currentObjectUrl);
      currentObjectUrl = null;
    }
  });

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.setAttribute('role', 'status');
  toast.setAttribute('aria-live', 'polite');
  document.body.appendChild(toast);
  let toastTimer;
  function showToast(message) {
    clearTimeout(toastTimer);
    toast.textContent = message;
    toast.classList.add('show');
    toastTimer = setTimeout(() => toast.classList.remove('show'), 2800);
  }

  const uploadButton = '<button type="button" class="btn-primary mt-5" data-dialog-upload>Upload an image</button>';
  const infoContent = {
    bulk: ['Bulk Editing', '<p class="section-copy text-sm">Process multiple product photos in one workflow. Start with an image to preview the XRemoveBG upload experience.</p>'+uploadButton],
    api: ['XRemoveBG API', '<p class="section-copy text-sm">Integrate background removal into your own application with a simple image-processing workflow. This static preview does not include API credentials or server processing.</p><div class="mt-4 rounded-xl bg-slate-900 p-4 font-mono text-xs leading-relaxed text-blue-100">POST /v1/images/remove-background<br>Content-Type: multipart/form-data</div>'+uploadButton],
    plugins: ['Plugins', '<p class="section-copy text-sm">Bring clean cutouts into your design and commerce workflow. Plugin destinations can be connected to your production integration.</p>'+uploadButton],
    pricing: ['Simple credit-based pricing', '<div class="grid gap-3 sm:grid-cols-3"><div class="rounded-xl border p-4"><strong>Free</strong><p class="mt-2 text-xs text-gray-500">Try sample images and explore the editor.</p></div><div class="rounded-xl border border-blue-300 bg-blue-50 p-4"><strong>Pay as you go</strong><p class="mt-2 text-xs text-gray-600">Credits for occasional image processing.</p></div><div class="rounded-xl border p-4"><strong>Subscription</strong><p class="mt-2 text-xs text-gray-500">Monthly credits for regular workflows.</p></div></div><p class="form-note mt-4">Demonstration plans only. Checkout is not connected.</p>'],
    help: ['Help Center', '<p class="section-copy text-sm">Choose an image with a clear subject, then upload JPG, PNG, WebP, or GIF up to 15 MB. You can also drag and drop, paste from the clipboard, or try a supplied sample.</p><a class="btn-secondary mt-5" href="mailto:support@xremovebg.com">Contact support</a>'],
    changelog: ['Changelog', '<div class="space-y-4 text-sm"><div><strong>October 2026</strong><p class="mt-1 text-gray-500">Updated Prompt Studio, responsive upload flows, and the legal page experience.</p></div><div class="border-t pt-4"><strong>September 2026</strong><p class="mt-1 text-gray-500">Improved comparison previews and image sample loading.</p></div></div>'],
    about: ['About XRemoveBG', '<p class="section-copy text-sm">XRemoveBG is an AI-powered image editing concept by XSPACEWEB PRIVATE LIMITED, built to make clean visual creation fast and approachable for individuals and teams.</p>'+uploadButton],
    integrations: ['Integrations', '<p class="section-copy text-sm">Connect the interface to your preferred image-processing service, design workflow, or e-commerce catalog. This preview keeps all selected images in your browser.</p>'+uploadButton],
    success: ['Customer success', '<div class="space-y-5 text-sm leading-relaxed text-gray-600"><p><strong class="text-gray-900">Sony Music:</strong> “We are impressed by the AI and think it’s the best choice on the market.”</p><p><strong class="text-gray-900">Phoenix:</strong> “A thousand times better. It simplified the whole process.”</p><p><strong class="text-gray-900">TechCrunch:</strong> Praised the handling of fine hair without jagged, amateurish edges.</p></div>']
  };

  const articleContent = {
    'remove-background': ['How to Remove Image Background in Seconds', '<img class="mb-5 w-full rounded-xl" src="assets/home_blog_1_sneaker.webp" alt="Blue sneaker"><div class="space-y-4 text-sm leading-relaxed text-gray-600"><p>Start with a sharp image where the subject is easy to distinguish from its surroundings. JPG, PNG, and WebP files all work well for product and portrait workflows.</p><p>Upload the image, inspect the edges around hair and fine details, then choose a transparent or replacement background. Export a PNG when you need transparency.</p></div>'],
    'social-media': ['Best Photo Background Remover for Social Media', '<img class="mb-5 w-full rounded-xl" src="assets/home_blog_2_hat_woman.webp" alt="Woman in a straw hat"><div class="space-y-4 text-sm leading-relaxed text-gray-600"><p>Clean backgrounds keep attention on the person or product in a crowded social feed. Use consistent lighting and a simple palette to make a cohesive series of posts.</p><p>Prepare separate crops for square, portrait, and story placements so the subject remains clear at every size.</p></div>'],
    ecommerce: ['Background Removal for E-commerce Product Photos', '<img class="mb-5 w-full rounded-xl" src="assets/home_blog_3_handbag.webp" alt="Cream handbag"><div class="space-y-4 text-sm leading-relaxed text-gray-600"><p>Consistent product imagery makes a catalog easier to scan. Center each item, retain natural shadows where appropriate, and use the same canvas ratio across your listings.</p><p>Transparent PNGs are useful for marketplace templates, promotional banners, and seasonal campaign designs.</p></div>']
  };

  function openImagePreview(src, name, isObjectUrl = false) {
    if (isObjectUrl) currentObjectUrl = src;
    const safeName = escapeHTML(name || 'Selected image');
    openDialog(safeName, `
      <img src="${escapeHTML(src)}" alt="Preview of ${safeName}" class="upload-preview" id="upload-preview-image">
      <p class="status-message" id="preview-status">Your image is loaded locally in this browser. Server-side AI background removal is not connected in this static preview.</p>
      <div class="mt-5 flex flex-col gap-2 sm:flex-row">
        <button type="button" class="btn-primary" data-dialog-choose>Choose another image</button>
        <a class="btn-secondary" href="${escapeHTML(src)}" download="${safeName.replace(/[^a-z0-9._-]/gi,'-')}.png">Download original</a>
      </div>`);
    const preview = dialogBody.querySelector('#upload-preview-image');
    if (preview) {
      preview.addEventListener('error', () => {
        const status = dialogBody.querySelector('#preview-status');
        if (status) {
          status.textContent = 'This image could not be loaded. Check the file or URL and try again.';
          status.classList.add('error');
        }
      });
    }
  }

  function handleFile(file) {
    if (!file) return;
    if (!file.type.startsWith('image/')) {
      showToast('Please choose an image file.');
      return;
    }
    if (file.size > 15 * 1024 * 1024) {
      showToast('Please choose an image smaller than 15 MB.');
      return;
    }
    openImagePreview(URL.createObjectURL(file), file.name, true);
  }

  function openUrlDialog() {
    openDialog('Add an image URL', `<form id="url-form"><label class="form-label" for="image-url">Public image URL</label><input class="form-input" id="image-url" name="url" type="url" required placeholder="https://example.com/image.jpg"><p class="form-note mt-3">The image is loaded directly from its source. No URL is sent to an XRemoveBG server.</p><div id="url-status" aria-live="polite"></div><button class="btn-primary mt-5" type="submit">Load image</button></form>`);
    const urlForm = dialogBody.querySelector('#url-form');
    if (urlForm) {
      urlForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const value = new FormData(event.currentTarget).get('url').trim();
        try {
          const url = new URL(value);
          if (!['http:','https:'].includes(url.protocol)) throw new Error('protocol');
          openImagePreview(url.href, 'Image from URL');
        } catch {
          const status = dialogBody.querySelector('#url-status');
          if (status) {
            status.className = 'status-message error';
            status.textContent = 'Enter a valid HTTP or HTTPS image URL.';
          }
        }
      });
    }
  }

  function openAuth(mode) {
    const signup = mode === 'signup';
    openDialog(signup ? 'Create your account' : 'Welcome back', `<form id="auth-form" class="space-y-4">${signup ? '<div><label class="form-label" for="auth-name">Name</label><input class="form-input" id="auth-name" name="name" autocomplete="name" required></div>' : ''}<div><label class="form-label" for="auth-email">Email</label><input class="form-input" id="auth-email" name="email" type="email" autocomplete="email" required></div><div><label class="form-label" for="auth-password">Password</label><input class="form-input" id="auth-password" name="password" type="password" autocomplete="${signup ? 'new-password' : 'current-password'}" minlength="6" required></div><button class="btn-primary w-full" type="submit">${signup ? 'Sign up' : 'Log in'}</button><div id="auth-status" aria-live="polite"></div><p class="form-note text-center">Interface demo only. Credentials are not transmitted or stored.</p></form>`);
    const authForm = dialogBody.querySelector('#auth-form');
    if (authForm) {
      authForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const status = dialogBody.querySelector('#auth-status');
        if (status) {
          status.className = 'status-message';
          status.textContent = 'Form validated successfully. No account was created and no credentials were sent.';
        }
      });
    }
  }

  function openPrompt(button) {
    currentPrompt = button.dataset.prompt || '';
    openDialog(button.dataset.promptTitle || 'AI Prompt', `<img src="${escapeHTML(button.dataset.promptImage)}" alt="" class="mb-5 max-h-[260px] w-full rounded-xl object-cover object-top"><p class="text-xs font-bold uppercase tracking-widest text-brand">/Prompt</p><p id="full-prompt" class="mt-2 text-sm leading-relaxed text-gray-600">${escapeHTML(currentPrompt)}</p><button type="button" class="btn-primary mt-5" data-copy-prompt>Copy prompt</button><span class="ml-3 text-xs text-gray-500" id="copy-status" aria-live="polite"></span>`);
  }

  async function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) {
      try {
        await navigator.clipboard.writeText(text);
        return;
      } catch (e) {
        // Fallback below
      }
    }
    const area = document.createElement('textarea');
    area.value = text;
    area.style.position = 'fixed';
    area.style.opacity = '0';
    document.body.appendChild(area);
    area.select();
    try {
      document.execCommand('copy');
    } finally {
      area.remove();
    }
  }

  function filterPrompts(group, filter) {
    document.querySelectorAll(`[data-filter-group="${group}"]`).forEach((button) => {
      const active = button.dataset.filter === filter;
      button.classList.toggle('active', active);
      button.setAttribute('aria-pressed', String(active));
    });
    const cards = [...document.querySelectorAll(`#${group}-prompts [data-category]`)];
    let visible = 0;
    cards.forEach((card) => {
      const show = filter === 'all' || card.dataset.category === filter;
      card.classList.toggle('hidden-filter', !show);
      if (show) visible++;
    });
    const empty = document.querySelector(`#${group}-filter-empty`);
    if (empty) empty.classList.toggle('hidden-filter', visible !== 0);
  }

  const qualityExamples = {
    products: ['assets/home_coat_before_after.webp?v=20261027_hd','Product cutout and generated background'],
    people: ['assets/home_hero_before_after.webp?v=20261027_v3','Portrait before and after background removal'],
    animals: ['assets/upload_prompt_3_husky.webp?v=20261027_hd','Detailed husky studio portrait'],
    cars: ['assets/home_car_before_after.webp?v=20261027_hd','Red sports car before and after background removal'],
    graphics: ['assets/home_prompt_library_collage.webp?v=20261027_hd','AI graphic prompt library examples']
  };
  const pictureExamples = {
    people: ['assets/home_just_picture_it.webp?v=20261027_hd','Original portrait, transparent background, new background and creative possibilities'],
    products: ['assets/home_car_before_after.webp?v=20261027_hd','Product photography example'],
    animals: ['assets/home_prompt_3_husky.webp?v=20261027_hd','Animal portrait example'],
    cars: ['assets/home_car_before_after.webp?v=20261027_hd','Car background removal example'],
    graphics: ['assets/home_prompt_library_collage.webp?v=20261027_hd','Graphic design example']
  };

  document.addEventListener('click', async (event) => {
    // Check if clicked inside a prompt-card
    const promptCard = event.target.closest('.prompt-card');
    if (promptCard) {
      const expandBtn = promptCard.querySelector('[data-prompt-title]');
      if (expandBtn) {
        openPrompt(expandBtn);
        return;
      }
    }

    const button = event.target.closest('button, a');
    if (!button) return;

    if (button.matches('[data-mobile-toggle]')) {
      const menu = document.querySelector('[data-mobile-menu]');
      if (menu) {
        const open = menu.classList.toggle('open');
        button.setAttribute('aria-expanded', String(open));
        button.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu');
      }
    }
    if (button.matches('[data-dropdown-toggle]')) {
      const menu = button.parentElement.querySelector('[data-dropdown-menu]');
      if (menu) {
        const willOpen = menu.classList.contains('hidden');
        menu.classList.toggle('hidden');
        button.setAttribute('aria-expanded', String(willOpen));
      }
    }
    if (button.matches('[data-dialog-close]')) closeDialog();
    if (button.matches('[data-upload-trigger], [data-dialog-upload], [data-dialog-choose]')) {
      if (button.matches('[data-dialog-upload], [data-dialog-choose]')) closeDialog();
      const input = document.querySelector('#global-file-input');
      if (input) { input.value = ''; input.click(); }
    }
    if (button.matches('[data-url-trigger]')) openUrlDialog();
    if (button.matches('[data-sample]')) openImagePreview(button.dataset.sample, button.dataset.sampleName);
    if (button.matches('[data-auth]')) openAuth(button.dataset.auth);
    if (button.matches('[data-info]')) {
      const content = infoContent[button.dataset.info];
      if (content) openDialog(content[0], content[1]);
    }
    if (button.matches('[data-prompt-title]')) openPrompt(button);
    if (button.matches('[data-copy-prompt]')) {
      await copyText(currentPrompt);
      const status = dialogBody.querySelector('#copy-status');
      if (status) status.textContent = 'Copied to clipboard!';
      showToast('Prompt copied to clipboard!');
    }
    if (button.matches('[data-filter-group]')) filterPrompts(button.dataset.filterGroup, button.dataset.filter);
    if (button.matches('[data-filter-reset]')) filterPrompts(button.dataset.filterReset, 'all');
    if (button.matches('[data-quality]')) {
      document.querySelectorAll('[data-quality]').forEach((tab) => { const active = tab === button; tab.classList.toggle('active',active); tab.setAttribute('aria-pressed',String(active)); });
      const example = qualityExamples[button.dataset.quality];
      const image = document.querySelector('#quality-image');
      if (image && example) { image.src = example[0]; image.alt = example[1]; image.style.maxHeight = button.dataset.quality === 'cars' || button.dataset.quality === 'people' ? 'none' : '560px'; }
    }
    if (button.matches('[data-picture]')) {
      document.querySelectorAll('[data-picture]').forEach((tab) => { const active = tab === button; tab.classList.toggle('active',active); tab.setAttribute('aria-pressed',String(active)); });
      const example = pictureExamples[button.dataset.picture];
      const image = document.querySelector('#picture-image');
      if (image && example) { image.src = example[0]; image.alt = example[1]; }
      const labels = document.querySelector('#picture-labels');
      if (labels) labels.style.visibility = button.dataset.picture === 'people' ? 'visible' : 'hidden';
    }
    if (button.matches('[data-zoom]')) openDialog(button.dataset.zoomTitle || 'Image preview', `<img src="${escapeHTML(button.dataset.zoom)}" alt="${escapeHTML(button.dataset.zoomTitle || 'Image preview')}" class="w-full rounded-xl">`);
    if (button.matches('[data-zoom-dynamic]')) {
      const image = document.getElementById(button.dataset.zoomDynamic);
      if (image) openDialog(button.dataset.zoomTitle || 'Image preview', `<img src="${escapeHTML(image.src)}" alt="${escapeHTML(image.alt)}" class="max-h-[70dvh] w-full rounded-xl object-contain">`);
    }
    if (button.matches('[data-article]')) {
      const article = articleContent[button.dataset.article];
      if (article) openDialog(article[0], article[1]);
    }
    if (button.matches('[data-generator]')) openDialog(button.dataset.generator, `<p class="section-copy text-sm">This control represents the ${escapeHTML(button.dataset.generator).toLowerCase()} step in the AI editing workflow. Upload an image to explore the front-end preview.</p>${uploadButton}`);
    if (button.matches('[data-share]')) {
      const shareData = { title: 'XRemoveBG', text: 'Fast, precise AI background removal.', url: window.location.href };
      if (navigator.share) {
        try { await navigator.share(shareData); } catch (error) { if (error.name !== 'AbortError') showToast('Sharing is unavailable in this browser.'); }
      } else {
        await copyText(window.location.href);
        showToast('Page link copied.');
      }
    }
  });

  document.addEventListener('click', (event) => {
    document.querySelectorAll('[data-dropdown-menu]').forEach((menu) => {
      if (!menu.parentElement.contains(event.target)) {
        menu.classList.add('hidden');
        const toggle = menu.parentElement.querySelector('[data-dropdown-toggle]');
        if (toggle) toggle.setAttribute('aria-expanded','false');
      }
    });
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      document.querySelectorAll('[data-dropdown-menu]').forEach((menu) => menu.classList.add('hidden'));
      const menu = document.querySelector('[data-mobile-menu]');
      if (menu) menu.classList.remove('open');
    }
  });

  const fileInput = document.querySelector('#global-file-input');
  if (fileInput) fileInput.addEventListener('change', () => handleFile(fileInput.files[0]));

  document.querySelectorAll('[data-drop-zone]').forEach((zone) => {
    ['dragenter','dragover'].forEach((type) => zone.addEventListener(type, (event) => { event.preventDefault(); zone.classList.add('dragging'); }));
    ['dragleave','drop'].forEach((type) => zone.addEventListener(type, (event) => { event.preventDefault(); zone.classList.remove('dragging'); }));
    zone.addEventListener('drop', (event) => handleFile(event.dataTransfer.files[0]));
  });

  document.addEventListener('paste', (event) => {
    if (event.target.matches('input, textarea')) return;
    const item = [...(event.clipboardData?.items || [])].find((entry) => entry.type.startsWith('image/'));
    if (item) handleFile(item.getAsFile());
  });

  const newsletter = document.querySelector('#newsletter-form');
  if (newsletter) newsletter.addEventListener('submit', (event) => {
    event.preventDefault();
    const status = document.querySelector('#newsletter-status');
    if (status) {
      status.className = 'status-message mx-auto mt-4 max-w-md';
      status.textContent = 'Email validated. This demo does not transmit or store subscriptions.';
    }
  });

  const selectedTool = new URLSearchParams(window.location.search).get('tool');
  if (selectedTool && document.body.contains(document.querySelector('#upload-prompts'))) {
    showToast(`${selectedTool} selected. Upload an image to begin.`);
  }
})();
