// Internal & 3rd party functional libraries
import { observer } from "mobx-react-lite";
import { FormControlLabel } from "@mui/material";
// Custom functional libraries
// Internal & 3rd party component libraries
// Custom component libraries
import { RenderEngineComponentProps } from '@hololinked/mobx-render-engine';
import { ContextfulMUIFormControlLabelProps } from "../component-types";
import { MUIRenderEngine } from '../index';



export const ContextfulFormControlLabel = observer(({state, renderer, logger, ...props } : RenderEngineComponentProps) => {

    const id = state.id
    const { checked, classes, componentsProps, disabled, disableTypography, inputRef, 
        label, labelPlacement, onChange, required, slotProps, sx, value } = state.computedProps as ContextfulMUIFormControlLabelProps
    const labelComponent = renderer.Component(label)

    const SytledFormControlLabel = MUIRenderEngine.StyledComponent(FormControlLabel, state.metadata.styling)// Note - could be unstyled also.
    
    logger.logMounting("ContextfulMUIFormControlLabel", id)
    return(
        <SytledFormControlLabel
            // checked={props.checked}
            classes={classes}
            componentProps={componentsProps}
            disabled={disabled}
            disableTypography={disableTypography}
            label={labelComponent}
            labelPlacement={labelPlacement}
            onChange={onChange}
            slotProps={slotProps}
            required={required}
            sx={sx}
            value={value}
            {...props}
        />
    )
})
