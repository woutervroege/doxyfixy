<script>
    import NewsletterSubscriptionForm from '../newsletter-subscription-form/NewsletterSubscriptionForm.svelte';
	import SocialButtons from '../social-buttons/SocialButtons.svelte';
import './footer.css';
</script>

<footer class="doxy-footer">
    
    <div class="head">
        <h5><span>Always at the</span> crossroads</h5>

        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 302 407">
            <g clip-path="url(#a)">
                <path fill="url(#b)" d="M26.659 4.907C25.221 2.809 22.503.589 20.19.349 17.597.083 14.99 0 12.243 0h-.227C8.348 0 4.44.138.01.138l94.896 139.25c3.041-4.366 5.234-8.109 7.996-11.346 3.403-3.998 3.065-7.165.101-11.478C77.449 79.419 52.169 42.082 26.659 4.907Z"/>
                <path fill="url(#c)" d="M94.833 268.835C63.283 314.767 32.206 360.007 0 406.897c7.765 0 13.746.319 19.665-.157 2.164-.172 4.925-1.68 6.169-3.478a17129.26 17129.26 0 0 0 78.075-113.701c1.137-1.669 1.46-5.127.525-6.807-2.617-4.725-6.092-8.954-9.606-13.909l.005-.01Z"/>
                <path fill="url(#d)" d="M295.358 396.877c-42.905-62.081-85.762-124.206-128.86-186.145-3.398-4.877-3.369-7.951-.005-12.824 37.97-54.944 75.68-110.08 113.452-165.168 7.065-10.298 7.244-20.835.535-31.61-.15-.241-.415-.393-.916-.845-.978.78-1.538 1.046-1.841 1.493-45.33 66.04-90.674 132.065-135.758 198.277-1.373 2.013-1.243 6.778.174 8.84 44.346 64.611 88.924 129.05 133.574 193.449 1.33 1.92 3.692 4.135 5.74 4.327 6.348.555 12.763.206 20.547.206-2.878-4.337-4.709-7.21-6.642-9.995v-.005Z"/>
            </g>
            <defs>
                <linearGradient id="b" x1="80.9" x2="24.228" y1="75.524" y2="75.565" gradientUnits="userSpaceOnUse">
                <stop stop-color="#C392C2"/>
                <stop offset="1" stop-color="#67BA84"/>
                </linearGradient>
                <linearGradient id="c" x1="80.621" x2="24.137" y1="343.697" y2="343.738" gradientUnits="userSpaceOnUse">
                <stop stop-color="#C392C2"/>
                <stop offset="1" stop-color="#67BA84"/>
                </linearGradient>
                <linearGradient id="d" x1="264.643" x2="178.019" y1="220.645" y2="220.678" gradientUnits="userSpaceOnUse">
                <stop stop-color="#C392C2"/>
                <stop offset="1" stop-color="#67BA84"/>
                </linearGradient>
                <clipPath id="a">
                <path fill="#fff" d="M0 0h302v407H0z"/>
                </clipPath>
            </defs>
            </svg>

        <h5><span>Where stories</span> are born</h5>
    </div>

    <div class="contents">
        <h6>Stay up-to-date</h6>
        <NewsletterSubscriptionForm/>
        <h6>Or follow us here</h6>
        <SocialButtons/>
    </div>

</footer>