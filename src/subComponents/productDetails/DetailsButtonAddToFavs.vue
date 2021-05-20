<template>
    <div class="details-button-fav">
        <button class="details-button-fav__button">
            <span>Favourite</span>
            <span class="details-button-fav__icon">
                <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.6 0C10.208 0 8.872 0.617984 8 1.59455C7.128 0.617984 5.792 0 4.4 0C1.936 0 0 1.84632 0 4.19619C0 7.08011 2.72 9.42997 6.84 13.0005L8 14L9.16 12.9929C13.28 9.42997 16 7.08011 16 4.19619C16 1.84632 14.064 0 11.6 0ZM8.08 11.8638L8 11.9401L7.92 11.8638C4.112 8.57548 1.6 6.40109 1.6 4.19619C1.6 2.6703 2.8 1.52589 4.4 1.52589C5.632 1.52589 6.832 2.2812 7.256 3.32643H8.752C9.168 2.2812 10.368 1.52589 11.6 1.52589C13.2 1.52589 14.4 2.6703 14.4 4.19619C14.4 6.40109 11.888 8.57548 8.08 11.8638Z" fill="black"/>
                </svg>
            </span>
        </button>
    </div>
</template>

<script>
export default {
    name: "DetailsButtonAddToCart"
}
</script>

<style lang="scss">
.details-button-fav {
    width: 100%;
    padding: 0 32px;
    box-sizing: border-box;
    margin-bottom: 10px;
}

.details-button-fav__button {
    width: 100%;
    height: 56px;
    border-radius: 28px;
    border: 1px solid $grey-regular;
    background: $white;
    color: $black;
    font-size: 18px;
    font-weight: $font-regular;
}   

.details-button-fav__icon {
    margin-left: 15px;
}
</style>