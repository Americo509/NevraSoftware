import { Injectable } from '@nestjs/common';
import * as Firebird from 'node-firebird';

@Injectable()
export class FirebirdService {
  private options = {
    host: '127.0.0.1',
    port: 3050, 
    database: process.env.DB_DATABASE,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD, 
  };

  async executeQuery(sql: string, params: any[] = []): Promise<any[]> {
    return new Promise<any[]>((resolve, reject) => {
      Firebird.attach(this.options, (err, db) => {
        if (err) {
          reject(err);
          return;
        }

        db.query(sql, params, (err, result) => {
          db.detach();
          if (err) {
            reject(err);
            return;
          }

          return resolve(result);
        });
      });
    });
  }
}