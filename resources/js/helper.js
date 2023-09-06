export const borderRadius = "10px";
export const buttonPadding = "15px";
export const margin = "20px";

export const dimensions = {
    "xs": "575px",
    "sm": "576px",
    "md": "768px",
    "lg": "992px",
    "xl": "1200px",
    "xxl": "1600px",
};

export function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

export function getCarouselBreakpoints(aItems, aBreakpoints = [[0, 800], [800, 1024], [1024, 1400], [1400, 1800], [1800, 100000]], aItemsToSlide = [1, 1, 1, 1, 1]) {
    return {
        desktop: {
            breakpoint: { max: aBreakpoints[4][1], min: aBreakpoints[4][0] },
            items: aItems[4],
            itemsToSlide: aItemsToSlide[4],
            partialVisibilityGutter: 100
        },
        laptop: {
            breakpoint: { max: aBreakpoints[3][1], min: aBreakpoints[3][0] },
            items: aItems[3],
            itemsToSlide: aItemsToSlide[3],
            partialVisibilityGutter: 40
        },
        tablet: {
            breakpoint: { max: aBreakpoints[2][1], min: aBreakpoints[2][0] },
            items: aItems[2],
            itemsToSlide: aItemsToSlide[2],
            partialVisibilityGutter: 40
        },
        smartphone: {
            breakpoint: { max: aBreakpoints[1][1], min: aBreakpoints[1][0] },
            items: aItems[1],
            itemsToSlide: aItemsToSlide[1],
            partialVisibilityGutter: 100
        },
        mobile: {
            breakpoint: { max: aBreakpoints[0][1], min: aBreakpoints[0][0] },
            items: aItems[0],
            itemsToSlide: aItemsToSlide[0],
            partialVisibilityGutter: 0
        },
    };
};