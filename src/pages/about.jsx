
export default function About() {
  return (
  <div className="about">

    <div className={"container"}>
      <div className={"header"}>
        <h2>About us</h2>
      </div>
      <div className={"mainContent"}>
        <p>
          Bienvenue sur le bloc-notes personnel en ligne ! Notre site Web vous permet de créer, partager et explorer des histoires.
          Que vous soyez un écrivain passionné ou simplement curieux de lire les récits des autres, vous êtes au bon endroit.
        </p>
      </div>
      <div className={"featureList"}>
        <div className={"featureItem"}>
          <span ></span>
          <p>Exploration Publique : Parcourez des histoires passionnantes créées par des utilisateurs du monde entier. Les histoires publiques sont accessibles à tous les visiteurs du site.</p>
        </div>
        <div className={"featureItem"}>
          <p>Partage d'Histoires : Si vous êtes authentifié, vous pouvez créer et partager vos propres histoires. Choisissez de les rendre publiques pour les partager avec la communauté ou gardez-les privées.</p>
        </div>
        <div className={"featureItem"}>
          <span className={"`${styles.featureIcon} fas fa-lock`"}></span>
          <p>Options de Confidentialité : Vous pouvez choisir de publier vos histoires anonymement et décider si elles doivent être publiques ou privées. Votre expérience est entre vos mains.</p>
        </div>
        <div className={"featureItem"}>
          <span className={"`${styles.featureIcon} fas fa-shield-alt`"}></span>
          <p>Connexion Sécurisée : Pour profiter de toutes les fonctionnalités du site, connectez-vous en utilisant votre adresse e-mail et votre mot de passe. Votre sécurité est notre priorité.</p>
        </div>
      </div>
      <div className={"callToAction"}>
        <p>Nous espérons que vous apprécierez votre séjour sur notre plateforme et que vous découvrirez de nouvelles histoires fascinantes. Si vous avez des questions ou des commentaires, n'hésitez pas à nous contacter.</p>
        <p>Rejoignez-nous dès aujourd'hui et commencez à écrire votre propre histoire en ligne !</p>
      </div>
      <div className={"footer"}>
        <p>Made with ❤️ by Rootchy</p>
      </div>
    </div>
   </div>

  );
}
