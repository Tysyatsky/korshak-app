import { NavLink } from 'react-router';
import { Stack, Group, Title, Text, Anchor, Image } from '@mantine/core';
import styles from './Hero.module.scss';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroGrid}>
              <Title className={styles.heading}>
          Коршак Наталія <br/>УЗД <br/>м. Рівне
        </Title>
        <Stack className={styles.colLeft} justify="flex-end" gap={0}>
          <Text className={styles.description}>
            Швидка та точна ультразвукова діагностика судин. Передове, якісне обладнання, надійні результати — і впевненість у вашому здоров'ї
          </Text>
        </Stack>

        <div className={styles.colCenter}>
          <Image src="/images/doctor-hero.jpg" alt="Коршак Наталія" className={styles.heroImage} />
        </div>

        <Stack className={styles.colRight} justify="space-between" gap={0}>
          <Group className={styles.nav} justify="flex-start" align="flex-start" gap={24}>
            <Stack gap={6}>
              <NavLink to="/pro-mene" className={styles.navLink}>Про мене</NavLink>
              <NavLink to="/posluhy" className={styles.navLink}>Послуги</NavLink>
              <NavLink to="/kontakty" className={styles.navLink}>Контакти</NavLink>
            </Stack>
          </Group>

          <Stack className={styles.credentialsGroup} gap={4}>
            <Text className={styles.credentialText}>Лікар вищої категорії</Text>
            <Text className={styles.credentialText}>25+ років практики</Text>
          </Stack>

          <Stack gap={2}>
            <Text className={styles.contactHours}>пн — пт</Text>
            <Text className={styles.contactHours}>9:00 – 15:00</Text>
            <Anchor href="tel:+380988138942" className={styles.contactPhone} underline="never">
              +38 098 813 89 42
            </Anchor>
          </Stack>
        </Stack>

      </div>
    </section>
  );
}

export default Hero;
