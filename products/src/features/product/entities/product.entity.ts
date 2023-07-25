import { ProductImage } from 'src/features/product-image/entities/product-image.entity';
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn } from 'typeorm';

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    public id!: number;

    @Column({ type: 'uuid', nullable: true })
    public u_id: string;

    @Column({ type: 'varchar' })
    public name: string;

    @Column({ type: 'varchar' })
    public offer_price: number;

    @Column({ type: 'varchar' })
    public original_price: number;

    @Column({ type: 'varchar' })
    public off_now: number;

    @Column({ type: 'varchar' })
    public total_ratings: string;

    @Column({ type: 'varchar' })
    public total_reviews: string;

    @Column({ type: 'varchar' })
    public rating: string;

    @Column({ type: 'varchar' })
    public description: string;

    @Column({ type: 'varchar', nullable: true })
    public item_link: string;

    @Column({ type: 'varchar', nullable: true })
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

    // @OneToOne(() => ProductImage)
    // @JoinColumn({ name: 'imageId' })
    // productImage: ProductImage;


}