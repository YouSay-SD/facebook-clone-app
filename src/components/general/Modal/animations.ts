import { useSpring } from 'react-spring';

export const modalAnimation = (modalOpen: any) => {
  const showHideModal = useSpring({
    to: async (next: any) => {
      if (modalOpen) {
        await next({ display: 'flex' });
        await next({ opacity: 1 });
      } else {
        await next({ opacity: 0 });
        await next({ display: 'none' });
      }
    },
    from: { opacity: 0, display: 'none' },
    config: { duration: 200 },
  });

  return showHideModal;
};
