import styles from "./WhatCanDo.module.less";
// import PhoneImage from "../../images/phone.webp";

import {
  Pencil as PencilIcon,
  Folder as FolderIcon,
  Humans as HumansIcon,
  Insect as InsectIcon,
  Devices as DevicesIcon,
  Case as CaseIcon,
} from "components/Icons";
import Image from "next/image";

import Item from "./Item";

const WhatCanDo = () => {
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <h2 className={styles.title}>What can Binerals do for you?</h2>
        <div className={styles.container}>
          <Item
            Icon={PencilIcon}
            title="Custom Software Design"
            text="Create an interface that makes an emotional connection with our Client's audiences. Think about the customer and what they might find helpful or interesting."
          />
          <Item
            Icon={CaseIcon}
            title="Enterprise Software"
            text="Design and build high-load custom software that automates and runs departments or the entire organization."
          />
          <Item
            Icon={HumansIcon}
            title="B2B/B2C Software"
            text="Design and build portals that connect businesses with their clients, suppliers, affiliates, or staff."
          />
          <div className={styles.container__center}>
            <Image
              src="/static/landing/phone.webp"
              width="302"
              height="605"
              alt=""
            />
          </div>
          <Item
            Icon={DevicesIcon}
            title="Cross-Platform App Development"
            text="Looking to build hybrid apps? Being pioneers of cross-platform app development, we create high-quality hybrid applications for iOS & Android."
          />
          <Item
            Icon={FolderIcon}
            title="Team Augmentation and R&D"
            text="Our IT talents can fill in gaps with missing roles or enhance your departments with people who can bring innovations and the latest technologies and experience."
          />
          <Item
            Icon={InsectIcon}
            title="Testing Custom Software"
            text="Client satisfaction is our prime goal, and that’s why we pay special attention to examining each developed software for bugs, performance, dedicated networking, and quality."
          />
        </div>
      </div>
    </section>
  );
};
export default WhatCanDo;
