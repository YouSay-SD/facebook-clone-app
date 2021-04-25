import { useSpring } from 'react-spring';

export const fadeInDown = (active: boolean) => {
  const initState = { opacity: 0, transform: 'translateY(-20px)' };
  const endState = { opacity: 1, transform: 'translateY(20px)' };

  const animation = useSpring({
    to: async (next: any) => {
      if (active) {
        await next({ display: 'block' });
        await next(endState);
      } else {
        await next(initState);
        await next({ display: 'none' });
      }
    },
    from: { display: 'none', ...initState },
    config: { duration: 200 },
  });

  return animation;
};
