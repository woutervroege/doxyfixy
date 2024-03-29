<script>
	import { onMount } from 'svelte';
    import PageHeader from '../page-header/PageHeader.svelte';
    import Card from '../card/Card.svelte';
    import Input from '../input/Input.svelte';
    import Button from '../button/Button.svelte';
    import './grid-page.css';


   /**
   * @type {string} title
   */
   export let title = '';

    /**
    * @type {string} intro
    */
    export let intro = '';

    /**
    * @type {array} tags
    */
    export let tags = [];

    /**
    * @type {boolean} withSearch
    */
    export let withSearch = false;

    /**
    * @type {string} searchValue
    */
    export let searchValue = '';

    /**
    * @type {boolean} showSearch
    */
    export let showSearch = false;

    /**
    * @type {array} cards
    */
    let cards = [];   

    /**
    * @type {array} selectedTags
    */
    let selectedTags = [];

    /**
    * @type {boolean} funky
    */
    export let funky = false;

    /**
    * @type {boolean} funky
    */
    export let twocols = false;

    /**
    * @type {boolean} funky
    */
    export let bigintro = false;

    /**
     * Has Tags
    */
    $: hasTags = tags.length > 0;

    /**
     * 
     */
    async function setSelectedTags(e) {
        document.documentElement.scrollTop = 0;
        const selectedTag = selectedTags[0];
        if(selectedTag === e.detail.tag) selectedTags = [];
        else selectedTags = [e.detail.tag];

        const url = new URL(window.location.href);
        url.search = selectedTags[0] ? `filter=${selectedTags[0]}` : '';
        window.history.pushState('','', url.href);

    }

    function enableSearch() {
        showSearch = true;
        root.querySelector('input').select();
        document.documentElement.scrollTop = 0;
    }

    function disableSearch() {
        showSearch = false;
        root.querySelector('input').blur();
        root.querySelector('input').value = null;
        root.querySelector('input').dispatchEvent(new Event('input'));
    }

    function handleSearchInput(e) {
        document.documentElement.scrollTop = 0;
        const url = new URL(window.location.href);
        url.search = e.detail.value ? `search=${e.detail.value}` : '';
        window.history.pushState('','', url.href);
        searchValue=e.detail.value;
    }

    onMount(async () => {
        const filter = new URLSearchParams(window.location.search).get('filter');
        if(filter) return selectedTags = [filter]
       
        const search = new URLSearchParams(window.location.search).get('search');
        if(search) {
            searchValue = decodeURIComponent(search);
            showSearch = true;
        }
	});

    /**
     * DOM selector
    */
    let root;
    let gridRoot;
    let funkyGridRoot;

    $: cards = root && [...root.querySelectorAll('.doxy-card')] || [];
    $: filteredCards = filterCards(cards, selectedTags, searchValue) || [];
    $: cardsGroups = getCardsGroups(filteredCards);
    $: hasCards = filteredCards.length > 0;
    
    function getCardsGroups(cards = []) {

        const groups = [];

        const chunks = _sliceIntoChunks(cards, 7);
        chunks.forEach(chunk => {
            if(chunk.length < 3) {
                groups.push(chunk)
            } else {
                groups.push([...chunk].splice(0, 2))
                groups.push([...chunk].splice(2))
            }
        })
        return groups;
    }

    function _sliceIntoChunks(arr, chunkSize) {
        const res = [];
        if(!funky) return res;
        for (let i = 0; i < arr.length; i += chunkSize) {
            const chunk = arr.slice(i, i + chunkSize);
            res.push(chunk);
        }
        return res;
    }

    function filterCards(cards, selectedTags, searchValue) {

        if(selectedTags.length === 0 && !searchValue) return cards;

        //filter by search value
        if(searchValue) {
            const pattern = new RegExp(searchValue, 'i');
            const filtered = cards.filter((card) => {
                const cardSearchData = card.dataset.searchdata;
                return cardSearchData.match(pattern);
            })
            return filtered;
        }

        //filter by tag
        else {

            const filtered = cards.filter((card, i) => {
                const cardTags = card.dataset.tags.toLowerCase().split(/,/g);

                for(var i in selectedTags) {
                    if(cardTags.includes(selectedTags[i])) return true;
                }
                
                return false;

            })

            return filtered;

        }


    }

    // Select the node that will be observed for mutations

    // Options for the observer (which mutations to observe)
    const config = { attributes: true, childList: true, subtree: true };

    // Callback function to execute when mutations are observed
    const callback = (mutationList, observer) => {
    for (const mutation of mutationList) {
        if (mutation.type === "childList") {
        console.log("A child node has been added or removed.");
        } else if (mutation.type === "attributes") {
        console.log(`The ${mutation.attributeName} attribute was modified.`);
        }
    }
    };

    onMount(() => {
        // Create an observer instance linked to the callback function
        const observer = new MutationObserver(callback);

        // Start observing the target node for configured mutations
        observer.observe(root, config);

    })

    // // Later, you can stop observing
    // observer.disconnect();

</script>

<div class="doxy-page doxy-grid-page {twocols ? 'doxy-grid-page-twocols' :  ''} {showSearch ? 'doxy-page-showsearch' :  ''}" bind:this={root}>

    <PageHeader
        title={title}
        intro={intro}
        bigintro={bigintro}
    />

    {#if hasTags}
    <!-- <div class="nav-container"> -->
    <nav>

        {#if withSearch}
        <span class="doxy-search">
            <Button icon="close" on:toggle={disableSearch}/>
            <Input
                placeholder="Search..."
                value={searchValue}
                on:input={handleSearchInput}
            />
        </span>
        {/if}
        
        <span class="filter-buttons">
            {#if withSearch}
            <Button
                icon="search"
                on:toggle={enableSearch}
            />
            {/if}

        {#each tags as tag}
            <Button
                label={tag}
                selectable
                selected={selectedTags.includes(tag.toLowerCase())}
                on:toggle={setSelectedTags}
            />
        {/each}
        </span>
    </nav>
    <!-- </div> -->
    {/if}


    
    {#if cards.length > 0 && !hasCards}<h5>Coming soon...</h5>{/if}

    <slot hidden={true}/>


    {#if filteredCards.length > 0}
    <div class="grid" hidden={funky} inert={funky}>
        {#each filteredCards as card}
            <a href={card.closest('a')?.href}>
                <Card
                    title={card.dataset.title}
                    searchdata={card.dataset.searchdata}
                    subtitle={card.dataset.subtitle}
                    size={card.dataset.size}
                    summary={card.dataset.summary}
                    tags={card.dataset.tags.split(',')}
                    href={card.dataset.href}
                    division={card.dataset.division}
                >
                <img
                    src={card.querySelector('img').src}
                    loading="lazy"
                    decoding="async"
                    alt=""
                    style={card.querySelector('img').getAttribute('style')}
                    >
            </Card>
            </a>
        {/each}
    </div>
    {/if}

    <div class="funky-grid" hidden={!funky} inert={!funky}>
        {#each cardsGroups as cardsGroup}
            <div class="grid-section grid-section-{cardsGroup.length > 2 ? 5 : cardsGroup.length}">
                {#each cardsGroup as card}
                    <a href={card.closest('a').href}>
                        <Card
                            title={card.dataset.title}
                            searchdata={card.dataset.searchdata}
                            subtitle={card.dataset.subtitle}
                            size={card.dataset.size}
                            summary={card.dataset.summary}
                            tags={card.dataset.tags.split(',')}
                            href={card.dataset.href}
                            division={card.dataset.division}
                        >
                        <img
                            src={card.querySelector('img').src}
                            style={card.querySelector('img').getAttribute('style')}
                            loading="lazy"
                            decoding="async"
                            alt=""
                        >
                    </Card>
                    </a>
                {/each}
            </div>
        {/each}
    </div>

</div>