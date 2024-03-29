// Internal & 3rd party functional libraries
import { observer } from 'mobx-react-lite'
import { useState } from 'react'
// Custom functional libraries
// Internal & 3rd party component libraries
import { Radio, RadioGroup } from '@mui/material'
// Custom component libraries
import { ContextfulMUIRadioGroupProps, ContextfulMUIRadioProps } from '../component-types'
import { RenderEngineComponentProps } from '@hololinked/mobx-render-engine' 
import { MUIRenderEngine } from '../index';



type ContextfulMUIRadioChildProps = {
    selectedValue? : string 
} & RenderEngineComponentProps

export const ContextfulRadio = observer(({state, renderer, logger, ...props } : ContextfulMUIRadioChildProps) => {

    const id = state.id
    const { checked, checkedIcon, classes, color, disabled, disableRipple, icon, 
        inputProps, inputRef, name, onChange, required, size, sx, value } = state.computedProps as ContextfulMUIRadioProps
    const checkedIconComponent = renderer.Component(checkedIcon)
    const iconComponent = renderer.Component(icon)

    const SytledRadio = MUIRenderEngine.StyledComponent(Radio, state.metadata.styling) // Note - could be unstyled also.
    logger.logMounting('ContextfulMUIRadio', id)
    return(
        <SytledRadio
            checked={checked}
            checkedIcon={checkedIconComponent}
            classes={classes}
            color={color}
            disabled={disabled}
            disableRipple={disableRipple}
            icon={iconComponent}
            id={id}
            inputProps={inputProps}
            inputRef={inputRef}
            name={name}
            onChange={onChange}
            required={required}
            size={size}
            sx={sx}
            value={value}
            {...props}
        />
    )
})



export const ContextfulRadioGroup = observer(({state, renderer, logger, ...props } : RenderEngineComponentProps) => {

    const id = state.id 
    const { defaultValue, name, onChange, value } = state.computedProps as ContextfulMUIRadioGroupProps

    const StyledRadioGroup = MUIRenderEngine.StyledComponent(RadioGroup, state.metadata.styling)
    logger.logMounting('ContextfulMUIRadioGroup', id)

    const [selectedValue, setSelectedValue] = useState(defaultValue)

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedValue(event.target.value);
    }

    return(
        <StyledRadioGroup
            defaultValue={defaultValue}
            name={name}
            onChange={onChange}
            value={value}
        >
            {state.computedChildren.map((child : string) => {
                let childState = renderer.componentStateMap[child] 
                return (
                    <ContextfulRadio
                        state={childState}
                        renderer={renderer}
                        logger={logger}
                        selectedValue={selectedValue}
                    />
                )
            })}
        </StyledRadioGroup>
    )
})



