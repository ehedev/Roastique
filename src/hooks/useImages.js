// >> Import Hero Section Images << //
import logo from '../assets/images/logo/logo.png';

// >> Import Hero Section Images << //
const heroModules = import.meta.glob('../assets/images/hero/*', { eager: true });
const HERO_IMAGES = Object.values(heroModules).map((mod) => mod.default);

// >> Import Philosophy Section Images << //
import philosophyBanner from '../assets/images/philosophy/banner.jpeg';

// >> Import Location Section Images << //
import locationBanner from '../assets/images/location/banner.jpeg';

export const useImages = {
    logo,
    HERO_IMAGES,
    philosophyBanner,
    locationBanner
};