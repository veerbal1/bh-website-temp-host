import React from "react";
import Link from "next/link";
import styles from "../styles/MenuItem.module.scss";

function MenuItem({ route }) {
  return (
    <Link href={route.link}>
      <a className={styles.routeLink}>{route.name}</a>
    </Link>
  );
}

export default MenuItem;
