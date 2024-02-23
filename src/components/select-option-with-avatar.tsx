import React from 'react'
import CustomAvatar from './custom-avatar'
import { Text } from './text'

type Props = {
    name: string,
    avatarUrl? : string,
    shape?: 'circle' | 'square'

}

function SelectOptionWithAvatar({name, avatarUrl, shape}: Props) {

  return (
    <div 
        style={{
            display: 'flex',
            alignItems: 'center',
            gap:'8px'
        }}
    >
        <CustomAvatar src={avatarUrl} name={name} shape={shape} />
        <Text>{name}</Text>
    </div>
  )
}

export default SelectOptionWithAvatar