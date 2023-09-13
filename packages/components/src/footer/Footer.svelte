<script>
    import NewsletterSubscriptionForm from '../newsletter-subscription-form/NewsletterSubscriptionForm.svelte';
	import SocialButtons from '../social-buttons/SocialButtons.svelte';
    import './footer.css';
</script>

<footer class="doxy-footer">
    
    <div class="head">
        <h5><span>Always at the</span> crossroads</h5>

        <svg viewBox="0 0 302 407" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_743_795)">
            <path d="M26.6584 4.90657C25.2222 2.80937 22.5038 0.589378 20.1904 0.348715C17.5973 0.0834952 14.9899 0 12.2426 0H12.0161C8.34827 0 4.43947 0.137522 0.0101318 0.137522C32.0758 47.1895 63.2161 92.886 94.9059 139.388C97.9471 135.022 100.14 131.279 102.902 128.042C106.305 124.044 105.967 120.877 103.003 116.564C77.4488 79.4187 52.1693 42.0816 26.6584 4.90657Z" fill="url(#paint0_linear_743_795)"/>
            <path d="M94.8332 268.835C63.2832 314.767 32.2056 360.007 0.00012207 406.897C7.76471 406.897 13.746 407.216 19.6646 406.74C21.8287 406.568 24.5904 405.06 25.8339 403.262C52.0099 365.468 78.0364 327.567 103.909 289.561C105.046 287.892 105.369 284.434 104.434 282.754C101.817 278.029 98.342 273.8 94.8284 268.845L94.8332 268.835Z" fill="url(#paint1_linear_743_795)"/>
            <path d="M295.358 396.877C252.453 334.796 209.596 272.671 166.498 210.732C163.1 205.855 163.129 202.781 166.493 197.908C204.463 142.964 242.172 87.8272 279.945 32.74C287.01 22.4423 287.189 11.9055 280.48 1.12969C280.33 0.889025 280.065 0.736769 279.564 0.284912C278.586 1.06584 278.026 1.33106 277.723 1.778C232.393 67.8178 187.049 133.843 141.965 200.055C140.592 202.068 140.722 206.833 142.139 208.895C186.485 273.506 231.063 337.945 275.713 402.344C277.043 404.264 279.405 406.479 281.453 406.671C287.801 407.226 294.216 406.877 302 406.877C299.122 402.54 297.291 399.667 295.358 396.882V396.877Z" fill="url(#paint2_linear_743_795)"/>
            </g>
            <defs>
            <linearGradient id="paint0_linear_743_795" x1="80.9003" y1="75.5238" x2="24.2278" y2="75.5651" gradientUnits="userSpaceOnUse">
            <stop stop-color="#C392C2"/>
            <stop offset="1" stop-color="#67BA84"/>
            </linearGradient>
            <linearGradient id="paint1_linear_743_795" x1="80.6214" y1="343.697" x2="24.1373" y2="343.738" gradientUnits="userSpaceOnUse">
            <stop stop-color="#C392C2"/>
            <stop offset="1" stop-color="#67BA84"/>
            </linearGradient>
            <linearGradient id="paint2_linear_743_795" x1="264.643" y1="220.645" x2="178.019" y2="220.678" gradientUnits="userSpaceOnUse">
            <stop stop-color="#C392C2"/>
            <stop offset="1" stop-color="#67BA84"/>
            </linearGradient>
            <clipPath id="clip0_743_795">
            <rect width="302" height="407" fill="white"/>
            </clipPath>
            </defs>
            </svg>
            

        <h5><span>Where stories</span> are born</h5>
    </div>

    <div class="contents">
        <h6>Follow us here</h6>
        <SocialButtons/>
    </div>

    <address>
        <span>Doxy Fixy</span>
        <span>Oudezijds Achterburgwal 63</span>
        <span>1012 DB Amsterdam</span>
        <span><a href="callto:+31(0)20 422 2607">+31(0)20 422 2607</a></span>
        <span><a href="mailto:info@doxy.nl">info@doxy.nl</a></span>
    </address>

</footer>