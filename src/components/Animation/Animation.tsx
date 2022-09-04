import { cn } from '@bem-react/classname';
import { styled } from '@mui/material';
import { useAppSelector } from '../../hook';
import { changeCurrentSong } from '../../store/trackSlice';
import {
  extradarkToDark,
  extradarkToHover,
  lightenDarkenColor,
} from '../../utils/colorUtils';

import './Animation.css';

const cnAnimation = cn('Animation');

export const AnimationBar = styled('p')<{
  bgcolor: string;
  animation: string;
}>`
  background-color: ${(p) => p.bgcolor};
  animation: ${(p) => p.animation};
`;

export const Animation = () => {
  const decorativeColor = useAppSelector(
    (state) => state.colorTheme.decorativeColor,
  );
  const colorHover = extradarkToHover(decorativeColor);
  const colorDark = extradarkToDark(decorativeColor);

  const isPlaying = useAppSelector((state) => state.tracks.autoplay);
  const animationProp = 'equalize 5s 0s infinite;';
  const animation = isPlaying ? animationProp : 'none';

  return (
    <div className={cnAnimation()}>
      <AnimationBar
        bgcolor={colorHover}
        animation={animation}
        className={cnAnimation('Bar1')}
      ></AnimationBar>
      <AnimationBar
        bgcolor={lightenDarkenColor(colorDark, 25)}
        animation={animation}
        className={cnAnimation('Bar2')}
      ></AnimationBar>
      <AnimationBar
        bgcolor={colorDark}
        animation={animation}
        className={cnAnimation('Bar3')}
      ></AnimationBar>
      <AnimationBar
        bgcolor={lightenDarkenColor(decorativeColor, 25)}
        animation={animation}
        className={cnAnimation('Bar4')}
      ></AnimationBar>
      <AnimationBar
        bgcolor={decorativeColor}
        animation={animation}
        className={cnAnimation('Bar5')}
      ></AnimationBar>
    </div>
  );
};
