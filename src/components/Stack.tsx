// Internal & 3rd party functional libraries
import { observer } from 'mobx-react-lite';
// Custom functional libraries
// Internal & 3rd party component libraries
import { Stack } from '@mui/material';
// Custom component libraries
import { RenderEngineComponentProps } from '@hololinked/mobx-render-engine'
import { ContextfulMUIStackProps } from '../component-types';



export const ContextfulStack = observer( ({state, renderer, logger, ...props} : RenderEngineComponentProps ) => {

	const id = state.id
	const { component, direction, divider, spacing, sx, useFlexGap } = state.computedProps as ContextfulMUIStackProps
	
	const dividerComponent = renderer.Component(divider as any) as any
    const componentComponent = renderer.Component(component as any) as any 
	logger.logMounting('ContextfulMUIStack', id)
	
	return (
			<Stack 
				id={id}
				component={componentComponent}
				direction={direction}
				divider={dividerComponent}
				spacing={spacing}
				sx={sx}
				useFlexGap={useFlexGap}
				{...props}
			>
				{renderer.Children(state.computedChildren)}
			</Stack>
			
		)
	}
)
