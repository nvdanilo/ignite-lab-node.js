import { Injectable, OnModuleDestroy } from "@nestjs/common";
import { ServerKafka } from "@nestjs/microservices";

@Injectable()
export class KafkaConsumerService
    extends ServerKafka
    implements OnModuleDestroy {
        constructor() {
            super({
                client: {
                    clientId: 'notifications',
                    brokers: ['actual-magpie-5762-us1-kafka.upstash.io:9092'],
                    sasl: {
                        mechanism: 'scram-sha-256',
                        username: 'YWN0dWFsLW1hZ3BpZS01NzYyJAoVyiTSQx61sjlqw_8rAUPtwW5PwvT4KhG-NYQ',
                        password: '24863cab902444cabef70563e13f4631',
                    },
                    ssl: true,
                },
            });
        }

    async onModuleDestroy() {
        await this.close();
    }
}