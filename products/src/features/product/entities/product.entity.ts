import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    public id!: number;

    @Column({ type: 'uuid' })
    public u_id: string;

    @Column({ type: 'varchar' })
    public name: string;

    @Column({ type: 'varchar', length: 120 })
    public offer_price: string;

    @Column({ type: 'varchar', length: 120 })
    public original_price: string;

    @Column({ type: 'varchar', length: 120 })
    public off_now: string;

    @Column({ type: 'varchar', length: 120 })
    public total_ratings: string;

    @Column({ type: 'varchar', length: 120 })
    public total_reviews: string;

    @Column({ type: 'varchar', length: 120 })
    public rating: string;

    @Column({ type: 'varchar' })
    public description: string;

    @Column({ type: 'varchar' })
    public item_link: string;

    @Column({ type: 'varchar' })
    public imageId: string;

    // @Column({ type: 'boolean', default: false })
    // public isDeleted: boolean;

    // @Column({ type: 'uuid' })

    /*
     * Create and Update Date Columns
     */

    @CreateDateColumn({ type: 'timestamp' })
    public created_at!: Date;

    // @UpdateDateColumn({ type: 'timestamp' })
    // public updated_at!: Date;
}