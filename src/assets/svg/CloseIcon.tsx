import React from 'react'
import EndeavorFancySVG, { Props } from './EndeavorFancySVG'

const CloseIcon: React.FC<Props> = (props: Props) => {
  return (
    <EndeavorFancySVG
      width={props.width || '24'}
      height={props.height || '24'}
      viewBox={props.viewBox || '0 0 24 24'}
      fill={props.fill || '#ffffff'}
    >
      <rect width='24' height='24' fill={props.fill} style={{ mixBlendMode: 'multiply' }} />
      <path
        d='M6.455 19L2 22.5V4C2 3.73478 2.10536 3.48043 2.29289 3.29289C2.48043 3.10536 2.73478 3 3 3H21C21.2652 3 21.5196 3.10536 21.7071 3.29289C21.8946 3.48043 22 3.73478 22 4V18C22 18.2652 21.8946 18.5196 21.7071 18.7071C21.5196 18.8946 21.2652 19 21 19H6.455ZM4 18.385L5.763 17H20V5H4V18.385ZM13.414 11L15.889 13.475L14.475 14.889L12 12.414L9.525 14.89L8.111 13.476L10.586 11L8.11 8.525L9.524 7.111L12 9.586L14.475 7.111L15.889 8.525L13.414 11Z'
        fill='#474747'
      />
    </EndeavorFancySVG>
  )
}

export default CloseIcon
