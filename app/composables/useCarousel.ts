import { ref, computed } from 'vue';

export function useCarousel(totalItems: number, visibleCount: number, cardWidth: number) {
    const currentIndex = ref<number>(0);

    const maxIndex = computed(() => {
        return totalItems - visibleCount;
    });

    const prev = () => {
        if (currentIndex.value > 0) {
            currentIndex.value--;
        }
    };

    const next = () => {
        if (currentIndex.value < maxIndex.value) {
            currentIndex.value++;
        }
    };

    let startX = 0;
    let endX = 0;

    const onTouchStart = (e: TouchEvent) => {
        const touch = e.touches?.[0];
        if (touch) {
            startX = touch.clientX;
        }
    };

    const onTouchMove = (e: TouchEvent) => {
        const touch = e.touches?.[0];
        if (touch) {
            endX = touch.clientX;
        }
    };

    const onTouchEnd = () => {
        const diff = startX - endX;
        if (Math.abs(diff) > 50) {
            if (diff > 0) {
                next();
            } else {
                prev();
            }
        }
        startX = 0;
        endX = 0;
    };

    return {
        currentIndex,
        prev,
        next,
        onTouchStart,
        onTouchMove,
        onTouchEnd,
        maxIndex,
        cardWidth,
    };
}