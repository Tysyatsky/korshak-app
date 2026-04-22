import { Stack, Group, Title, Text, Anchor, Image } from '@mantine/core';
import styles from './Hero.module.scss';
import { asset } from '../../utils/asset';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroGrid}>
        <Title className={styles.heading}>
          Коршак Наталія <br/>УЗД <br/>м. Рівне
        </Title>

        <div className={styles.colSide}>
          <Stack className={styles.colLeft} justify="flex-end" gap={0}>
            <Text className={styles.description}>
              Швидка та точна ультразвукова діагностика. Передове, якісне обладнання, надійні результати — і впевненість у вашому здоров'ї
            </Text>
          </Stack>

          <Stack className={styles.colRight} justify="space-between" gap={0}>
            <Group className={styles.nav} justify="flex-start" align="flex-start" gap={24}>
              <Stack gap={6}>
                <Text className={styles.credentialText}>Лікар вищої категорії</Text>
                <Text className={styles.credentialText}>30+ років практики</Text>
              </Stack>
            </Group>

            <Stack className={styles.credentialsGroup} gap={4}>
              <Text className={styles.contactHours}>Години роботи</Text>
              <Text className={styles.contactHours}>пн — пт</Text>
              <Text className={styles.contactHours}>9:00 – 15:00</Text>
            </Stack>

            <Stack gap={2}>
              <Anchor href="tel:+380988138942" className={styles.contactPhone} underline="never">
                Телефон для запису<br/>
                +38 098 813 89 42
              </Anchor>
            </Stack>
          </Stack>
        </div>

        <div className={styles.colCenter}>
          <Image src={asset('images/doctor-hero.jpg')} alt="Коршак Наталія" className={styles.heroImage} />
        </div>
      </div>
    </section>
  );
}

export default Hero;
