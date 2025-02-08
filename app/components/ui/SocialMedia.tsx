import { Link } from '@remix-run/react'
import { Icons } from '~/components/icon'

interface Props {
	size?: 'sm' | 'lg'
}

function SocialMedia(props: Props) {
	const { size = 'lg' } = props

	const className = size === 'sm' ? 'social-media-link-sm' : 'social-media-link'

	return (
		<>
			<Link to={''}>
				<div className={className}>
					<Icons.Facebook />
				</div>
			</Link>
			<Link to={''}>
				<div className={className}>
					<Icons.Instagram />
				</div>
			</Link>
			<Link to={''}>
				<div className={className}>
					<Icons.LinkedIn />
				</div>
			</Link>
			<Link to={''}>
				<div className={className}>
					<Icons.Github />
				</div>
			</Link>
			<Link to={''}>
				<div className={className}>
					<Icons.RedRabbit />
				</div>
			</Link>
		</>
	)
}

export default SocialMedia

