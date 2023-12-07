import clsx from 'clsx'
import Heading from '@theme/Heading'
import styles from './styles.module.css'

type FeatureItem = {
  title: string
  description: JSX.Element
}

const FeatureList: FeatureItem[] = [
  {
    title: 'Facile à Utiliser',
    description: (
      <>
        Notre calculatrice a été conçue pour être facilement utilisée,
        permettant des opérations rapides et efficaces.
      </>
    ),
  },
  {
    title: 'Alimenté par React',
    description: (
      <>
        Bénéficiez de la puissance de React pour personnaliser votre expérience
        de calcul. La calculatrice peut être étendue tout en réutilisant une
        interface cohérente.
      </>
    ),
  },
  {
    title: 'Concentrez-vous sur l Essentiel',
    description: (
      <>
        La calculatrice vous permet de vous concentrer sur vos calculs, nous
        nous occupons du reste. Entrez vos données et obtenez rapidement vos
        résultats.
      </>
    ),
  },
]

function Feature({ title, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  )
}
