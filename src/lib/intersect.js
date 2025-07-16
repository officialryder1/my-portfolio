export function intersect(node, params = {}) {
    let observer;

    const handleIntersect = (e) => {
        const intersecting = e[0].isIntersecting;
        node.dispatchEvent(new CustomEvent('intersect', {
            detail: {intersecting}
        }))
    };

    const setObserver = () => {
        if (observer) observer.disconnect();
        observer = new IntersectionObserver(handleIntersect, params)
        observer.observe(node)
    }

    setObserver();

    return {
        update(params) {
            setObserver
        },
        destroy() {
            if (observer) observer.disconnect();
        }
    }
}